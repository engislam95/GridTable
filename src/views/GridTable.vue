<template>
  <div class="about container is-fluid">
    <p class="align-left mb-5"> Select requests to perform actions </p>
    <b-table
      class="mb-5"
      :data="userData"
      :striped="true"
      :hoverable="true"
      :mobile-cards="false"
      :opened-detailed="defaultOpenedDetails"
      paginated
      per-page="3"
      :pagination-simple="false"
      :pagination-rounded="true"
      pagination-order="is-centered"
      pagination-size="is-small"
      checkable
      :checked-rows.sync="checkedRows"
      checkbox-position="left"
      detailed
     :has-detailed-visible="()=>true"
      detail-key="first_name"
      :detail-transition="transitionName"
      @details-open="(row) => $buefy.toast.open(`Expanded ${row.first_name}`)"
      :show-detail-icon="showDetailIcon"
    >
      <b-table-column
        field="id"
        label="ID"
        width="40"
        numeric
        centered
        v-slot="props"
      >
        {{ props.row.id }}
      </b-table-column>

      <b-table-column
        field="first_name"
        label="First Name"
        centered
        v-slot="props"
      >
        {{ props.row.first_name }}
      </b-table-column>

      <b-table-column
        field="last_name"
        label="Last Name"
        centered
        v-slot="props"
      >
        {{ props.row.last_name }}
      </b-table-column>
      <b-table-column field="date" label="Date" centered v-slot="props">
        <span class="tag is-success">
          {{ new Date(props.row.date).toLocaleDateString() }}
        </span>
      </b-table-column>
      <b-table-column label="Gender" centered v-slot="props">
        <span >
          <b-icon
            pack="fa"
            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
          >
          </b-icon>
          {{ props.row.gender }}
        </span>
      </b-table-column>

      <b-table-column centered v-slot="props">
        <span @click="editRow(props.row)">
          <b-icon class="iconAction mr-5 " type="is-success" pack="fa" icon="pencil"> </b-icon>
        </span>
        <span @click="deleteRow(props.row)">
          <b-icon class="iconAction" pack="fa" type="is-danger" icon="trash-o">
            {{ checkedRows }}
          </b-icon>
        </span>
      </b-table-column>

      <template #detail="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong
                  >{{ props.row.first_name }} {{ props.row.last_name }}</strong
                >
                <small>@{{ props.row.first_name }}</small>
                <small>31m</small>
                <br />
                {{ props.row.notes }}
              </p>
            </div>
          </div>
        </article>
      </template>
      <template #bottom-left>
          <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </b-table>

    <modal :Identifier="userObj.id" :isComponentModalActive="modelStatus" :Fname="userObj.Fname" :Lname="userObj.Lname" :notes="userObj.notes"  />
    <upload />
  </div>
</template>
<script>
import modal from '../components/modal.vue'
import Upload from '../components/upload.vue';
export default {
  components: { modal, Upload },
  data() {
    return {
      defaultOpenedDetails: [],
      showDetailIcon: true,
      useTransition: true,
      checkedRows: [],
      userObj: {}
    };
  },

  computed: {
    userData () {
     return this.$store.state.users
    },
    modelStatus(){
     return this.$store.state.openModel

    },
    transitionName() {
      if (this.useTransition) {
        return "fade";
      }
    },
  },
  methods: {
    editRow(row) {
      this.userObj = { 
        id: row.id ,
        Fname : row.first_name ,
        Lname : row.last_name ,
        notes : row.notes 
      }
     this.$store.commit('CLOSE_MODEL' , true)
    },
    deleteRow(row)
    {
         this.$buefy.dialog.confirm({
              title: 'Deleting user',
              message: 'Are you sure you want to <b>delete</b> this user? This action cannot be undone.',
              confirmText: 'Delete User',
              type: 'is-danger',
              hasIcon: true,
              onConfirm: () => { 
                this.$buefy.toast.open('User deleted!')
                this.$store.commit('DELETE_USER' , row)
              } 
          })
    }
  },
};
</script>
<style >
.pagination-list
{
  order:2
}
.pagination-link.is-current, .b-checkbox.checkbox input[type=checkbox]:checked + .check , .button.is-primary, .button.is-primary[disabled], .button.is-primary:hover, .tag:not(body).is-primary
{
  background-color: #48c78e;
  border-color: #48c78e;
}
.b-table .table .chevron-cell > a
{
  color : #48c78e !important;
}
.iconAction
{
  cursor: pointer;
}
.align-left
{
  text-align: left;
}
</style>