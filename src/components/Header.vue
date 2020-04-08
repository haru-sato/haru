<template>
<Header>
    <div id ="headerSection">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    </div>
</Header>
</template>

<style>
    #headerSection{
        background: #F3F3F3;
        width: 100%;
        height: auto;
    }

</style>

<script>
export default {
name: 'Header',
props: {
msg: String
}
}
</script>