<template>
  <div class="container">
    <div class="row">
      <form>
        <fieldset>
          <legend>Music World</legend>
          <appSearchArea @newDataSet="results = $event"></appSearchArea>
        </fieldset>
      </form>
    </div>

    <div class="row">
      <div class="col-md-12">
        <appResultArea :resList="results"></appResultArea>
      </div>
    </div>
  </div>
</template>




<script>
import SearchArea from "./SearchArea";
import ResultArea from "./ResultArea";

export default {
  data() {
    return {
      results: []
    };
  },

  components: {
    appSearchArea: SearchArea,
    appResultArea: ResultArea
  }
};
</script>



<style>
</style>