import { supabase } from '../../../init';

export const put_user_goal = async (req, res) => {
  try {
    const goalId = req.params.id;
    const updatedgoal = {
      user_id: req.user.id,
        objetivo: req.body.objetivo,
        prazo: req.body.prazo,
        desejado: req.body.valor_desejado
    };

    const { error } = await supabase
      .from('goals')
      .update(updatedgoal)
      .eq('id', id);

    if (error) {
      throw error;
    }

    res.status(200).send("Objetivo atualizado com sucesso");
  } catch (error) {
    console.error('Erro ao atualizar objetivo:', error);
    res.status(500).json({ error: 'Erro ao atualizar objetivo' });
  }
};
