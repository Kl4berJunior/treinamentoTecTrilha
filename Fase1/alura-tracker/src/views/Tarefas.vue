<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="ListaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefas'
import Box from '../components/Box.vue';


export default defineComponent({
    name: "App",
    components: { Formulario, Tarefa, Box },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
        ListaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        }
    }
});
</script>
  