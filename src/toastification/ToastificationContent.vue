<template>
  <div class="toastification color-toast">
    <div class="d-flex align-items-start">
      <b-avatar :variant="variant" size="1.8rem" class="mr-75 flex-shrink-0">
        <feather-icon :icon="icon" size="15" />
      </b-avatar>
      <div class="d-flex flex-grow-1">
        <div>
          <h5
            translate="yes"
            lang="es"
            v-if="title"
            class="mb-0 font-weight-bolder toastification-title"
            :class="`text-${variant}`"
            v-text="title"
          />
          <small
            v-if="text"
            class="d-inline-block text-body color-text"
            v-text="text"
          />
        </div>
        <span
          class="cursor-pointer toastification-close-icon ml-auto "
          @click="$emit('close-toast')"
        >
          <feather-icon v-if="!hideClose" icon="XIcon" class="text-body" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    hideClose: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.toastification-close-icon,
.toastification-title {
  line-height: 26px;
  margin-right: 8px;
}

.toastification-title {
  color: inherit;
}
</style>
