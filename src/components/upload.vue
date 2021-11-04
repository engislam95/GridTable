<template>
  <section>
    <b-field>
      <b-upload v-model="dropFiles" multiple drag-drop expanded>
        <section class="section">
          <div class="content has-text-centered">
            <p style="font-size: 20px" class="dropFile">
              Drop your files here or
              <b-upload v-model="file">
                <a class="button is-success is-light">
                  <span>{{ file.name || "BROWSE" }}</span>
                </a>
              </b-upload>
            </p>
            <p>
              <b-icon
                icon="tray-arrow-down"
                type="is-success"
                size="is-large"
              ></b-icon>
            </p>
            <p class="dropFile">
              Also you can upload your data through SFTP |
              <a href="https://docs.liveramp.com/connect/en/upload-a-file-via-liveramp-s-sftp.html" style="text-decoration: underline"> Learn more </a>
            </p>
          </div>
        </section>
      </b-upload>
    </b-field>

    <div class="tags">
      <span
        v-for="(file, index) in dropFiles"
        :key="index"
        class="tag is-primary"
      >
        {{ file.name }}
        <button
          class="delete is-small"
          type="button"
          @click="deleteDropFile(index)"
        ></button>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      file: {},
      dropFiles: [],
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
  },
};
</script>
<style  lang="scss">
.upload .upload-draggable {
  border: 2px dashed #48c78e !important;
}
.dropFile {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
  a {
    color: #48c78e !important;
  }
}
</style>