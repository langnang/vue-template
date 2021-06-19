<template>
    <div>
        <icon v-for="i in icons" :name="i" :key="i">{{i}}</icon>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                "address-book",
                "address-card",
                "adjust",
                "american-sign-language-interpreting",
                "anchor",
                "archive",
                "assistive-listening-systems",
                "asterisk",
                "at",
                "audio-description",
                "balance-scale",
                "ban",
                "barcode",
                "bars",
                "bath",
                "battery-empty",
                "battery-full",
                "battery-half",
                "battery-quarter",
                "battery-three-quarters",
                "bed",
                "beer",
                "bell",
                "bell-slash",
                "bicycle",
                "binoculars",
                "birthday-cake",
                "blind",
                "bolt",
                "bomb"
            ]
        };
    }
};
</script>