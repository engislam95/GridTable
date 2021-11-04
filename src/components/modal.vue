<template>
    <b-modal :active.sync="showModal" has-modal-card :can-cancel="false">
    <form action="" :id="Identifier">
      <div class="modal-card " >
        <header class="modal-card-head">
          <p class="modal-card-title">User Data</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Fname">
            <b-input
              type="text"
              v-model="F_name"
              placeholder="Your first name"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Lname">
            <b-input
              type="text"
              v-model="L_name"
              placeholder="Your Last name"
              required
            >
            </b-input>
          </b-field>
          <b-field label="Notes">
            <b-input
              type="textarea"
              v-model="Notes"
              placeholder="Your notes"
              required
            >
            </b-input>
          </b-field>
         
        </section>
        <footer class="modal-card-foot">
          <b-button label="Edit" type="is-primary" @click="editUser()" :disabled="isDisabled"/>
          <b-button label="Close" type="is-danger" @click="closeModel()" />
        </footer>
      </div>
    </form>
    </b-modal>
</template>

<script>
export default {
  name: "modal",
  props: {
    Identifier: Number ,
    Fname: String,
    Lname: String,
    notes: String,
    isComponentModalActive : Boolean
  },

  data(){
      return {
          showModal: this.isComponentModalActive,
          F_name: this.Fname,
          L_name: this.Lname,
          Notes: this.notes,
      }
  }, 
   computed: {
  	isDisabled() {
    	return !this.F_name || !this.L_name || !this.Notes
    }
  },
  watch: {
    isComponentModalActive: function () {
        this.showModal= this.isComponentModalActive
    }, 
   
    Fname:function() 
    {
      this.F_name = this.Fname
    }, 
    Lname:function()
    {
      this.L_name = this.Lname ;
    },
    notes:function()
    {
      this.Notes = this.notes ;
    }
},

  methods: {
    editUser()
    {
      let userData = {
        id : this.Identifier ,
        Fname : this.F_name , 
        Lname : this.L_name , 
        notes : this.Notes
      }
      this.$store.commit('EDIT_USER' , userData)
      this.showModal = false ;
    }, 
    closeModel()
    {
      this.$store.commit('CLOSE_MODEL' , false)
    }
  }
};
</script>
<style scoped>
.modal-card
{
  text-align: left;
}
</style>