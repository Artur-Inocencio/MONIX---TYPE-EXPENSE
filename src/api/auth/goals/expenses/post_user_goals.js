import { supabase } from '../../../init';

export const post_user_goal = async (req, res) => {
  try {
    if (!req.body.objetivo 
      || !req.body.valor_inicial
      || !req.body.prazo 
      || !req.body.valor_desejado
    ) {
      res.status(400).json({ error: 'É necessário preencher todos os campos' });
    }
    const { error } = await supabase
      .from('goals')
      .insert({
        user_id: req.user.id,
        objetivo: req.body.objetivo,
        prazo: req.body.prazo,
        desejado: req.body.valor_desejado
      });
      if (error) throw error;

    res.status(200).send("Objetivo criada com sucesso");
  } catch (error) {
    console.error('Erro ao criar objetivo:', error);
    res.status(500).json({ error: 'Erro ao criar objetivo' });
  }
};
