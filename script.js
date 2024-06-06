function enviarDadosParaFirebase() {
    const nomeAluno = document.getElementById('nome').value;
    const turma = document.getElementById('turma').value;
    const curso = document.getElementById('curso').value;
    const imagem = document.getElementById('imagem').files[0]; // Obtém o arquivo de 
   imagem
    if (imagem) {
    const storageRef = storage.ref('imagens/' + imagem.name);
    storageRef.put(imagem).then(snapshot => {
    snapshot.ref.getDownloadURL().then(downloadURL => {
    const dados = {
    nomeAluno: nomeAluno,
    turma: turma,
    curso: curso,
    imagemURL: downloadURL // Salva a URL da imagem
    };
    database.ref('alunos').push(dados)
    .then(() => {
    alert('Dados enviados com sucesso!');
    document.getElementById('nome').value = '';
    document.getElementById('turma').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('imagem').value = '';
    })
    .catch(error => {
    console.error('Erro ao enviar os dados: ', error);
    });
    });
    }).catch(error => {
    console.error('Erro ao fazer upload da imagem: ', error);
    });
    } else {
    alert('Por favor, selecione uma imagem.');
    }
   }