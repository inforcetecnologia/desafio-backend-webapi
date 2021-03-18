using GerenciadorDeTarefas.Data;
using GerenciadorDeTarefas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciadorDeTarefas.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    [Produces("application/json")]
    public class TarefasController : Controller
    {
        private readonly ApplicationDbContext _context;

        public TarefasController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Tarefa>>> index()
        {
            try
            {
                var Result = await _context.Tarefas.AsNoTracking().ToListAsync();
                return Ok(Result);
            }
            catch (Exception e)
            {
                return BadRequest(new { mesage = "Não foi possível retornar a lista de tarefas." + e });
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Tarefa>> Details(int id)
        {
            try
            {
                var Result = await _context.Tarefas.AsNoTracking().FirstOrDefaultAsync(t => t.Id == id);

                return Ok(Result);

            }catch(Exception e)
            {
                return BadRequest(new { message = "Não foi possivel retornar a tarefa." + e });
            }
        }

        [HttpPost]
        public async Task<ActionResult<Tarefa>> Post([FromBody] Tarefa tarefa)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Não foi possível incluir a tarefa.");

                _context.Tarefas.Add(tarefa);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Tarefa cadastrada com sucesso." });

            }
            catch(Exception e)
            {
                return BadRequest(new { message = "Não foi registrar a tarefa." + e });
            }
        }

        [Route("{id:int}")]
        [HttpPut]
        public async Task<ActionResult<Tarefa>> Put(int id, [FromBody] Tarefa tarefa)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Não foi possível incluir a tarefa.");

                if (id != tarefa.Id)
                {
                    return NotFound(new { Message = "Tarefa não encontrada" });
                }

                _context.Entry<Tarefa>(tarefa).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok(new { message = "Tarefa alterada com sucesso" });
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Não foi possível incluir a tarefa." + e });
            }
        }

        [Route("{id:int}")]
        [HttpDelete]
        public async Task<ActionResult<Tarefa>> Delete(int id)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Não foi possível incluir a tarefa.");

                var Result = await _context.Tarefas.FirstOrDefaultAsync(t => t.Id == id);

                if (Result == null)
                {
                    return NotFound(new { message = "Tarefa não encontrada." });
                }

                _context.Tarefas.Remove(Result);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Produto excluido com sucesso." });
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Não foi possível remover a tarefa." + e });
            }
        }

    }
}
