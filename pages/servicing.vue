<template>
    <div>
        <div class="bg-gray-200">
            <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
                <nuxt-link :to="{ name: 'a-company', params: {} }">Empresa</nuxt-link>
                <nuxt-link :to="{ name: 'servicing' }">Serviços</nuxt-link>
                <nuxt-link to="/product">Produtos</nuxt-link>
            </div>
        </div>

        <div>
            <div class="container mx-auto">
                <h1 class="text-lg font-bold">Serviços</h1>

                <nuxt-link to="/servicing/dev-sites">Desenvolvimento de sites</nuxt-link>
                <nuxt-link to="/servicing/marketing-digital">Marketing digital</nuxt-link>

                <br><br>

                <nuxt-child />

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
        };
    },

    methods: {
    },
};
</script>
