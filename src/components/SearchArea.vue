
<template>
  <div class="form-group">
    <label for="musicid">Search Music</label>
    <div class="col-ld-10">
      <input
        type="text"
        class="form-control"
        id="musicid"
        placeholder="Type here"
        @input="keyPressed"
      />
    </div>
  </div>
</template>




<script>
import axios from "axios";

export default {
  data() {
    return {
      newSet: []
    };
  },

  methods: {
    keyPressed(event) {
      var key = event.target.value;

      axios
        .get("https://rms.api.bbc.co.uk/music/popular/tracks" + key)
        .then(response => {
          this.newSet = response.data.MusicPopularityTrack;
        })
        .catch(e => {
          this.error.push(e);
        });

      this.$emit("newDataSet", this.newSet);
    }
  }
};
</script>



<style>
</style>