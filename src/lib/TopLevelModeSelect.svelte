<script>
    import Select from "svelte-select";
    let simple = ["one", "two", "three"];

    let collection = [
        { value: 1, label: "one" },
        { value: 2, label: "two" },
        { value: 3, label: "three" },
    ];
</script>

<div class="top">
    <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>

    <Select
        items={simple}
        --placeholder-color="black"
        --item-color="white"
        --item-is-not-selectable-color="gray"
        --input-color="white"
        --background="#68f668"
        --border-radius="10px"
        --border="2px solid gray"
        --item-hover-color="black"
        --list-background="rgb(46, 45, 45)"
        --margin="0px"
        --list-max-height="80vh"
        --font-size="1.2em"
    />

    <Select
        items={collection}
        --placeholder-color="black"
        --item-color="white"
        --item-is-not-selectable-color="gray"
        --input-color="white"
        --background="#68f668"
        --border-radius="10px"
        --border="2px solid gray"
        --item-hover-color="black"
        --list-background="rgb(46, 45, 45)"
        --margin="0px"
        --list-max-height="80vh"
        --font-size="1.2em"
    />
</div>

<style>
    .top {
        margin-top: 10vh;
        margin-left: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 20vh;
        width: 20vw;
        gap: 2em;
    }
</style>
