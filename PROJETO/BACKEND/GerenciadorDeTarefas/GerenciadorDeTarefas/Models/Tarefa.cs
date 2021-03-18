using System;
using System.ComponentModel.DataAnnotations;

namespace GerenciadorDeTarefas.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public DateTime DataDeCriacao { get; set; }
        [Required]
        public DateTime DataDeAtualizacao { get; set; }
    }
}
