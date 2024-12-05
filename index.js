
function cadastrarUsuario() {
    const nome = document.querySelector("input[placeholder='Nome']").value;
    const telefone = document.querySelector("input[placeholder='Telefone']").value;
    const email = document.querySelector("input[placeholder='E-mail']").value;
    const senha = document.querySelector("input[placeholder='Senha']").value;
  
    if (nome && telefone && email && senha) {
      
      const usuario = { nome, telefone, email, senha };
      localStorage.setItem(email, JSON.stringify(usuario));
      alert("Cadastro realizado com sucesso!");
      
      window.location.href = 'teladelogin.html';
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  }

  function fazerLogin() {
    const email = document.querySelector("input[placeholder='E-mail']").value;
    const senha = document.querySelector("input[placeholder='Senha']").value;
  
    const usuario = JSON.parse(localStorage.getItem(email));
  
    if (usuario && usuario.senha === senha) {
      alert("Login realizado com sucesso!");
      
      window.location.href = 'inicio.html';
    } else {
      alert("E-mail ou senha incorretos!");
    }
  }

  function redefinirSenha() {
    const email = document.querySelector("input[placeholder='E-mail']").value;

    const usuario = JSON.parse(localStorage.getItem(email));

    if ( usuario && usuario.email === email) {
       
        window.location.href = 'redefinirsenha.html';
    } else {
        alert("Email não correspondente");
    }
  }

  function novaSenha() {
    const email = document.querySelector("input[placeholder='Email']").value;
    const NovaSenha = document.querySelector("input[placeholder='Nova Senha']").value;
    const ConfirmaSenha = document.querySelector("input[placeholder='Confirma sua Senha']").value;

  
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario) {
        if (NovaSenha === ConfirmaSenha) {
            
            usuario.senha = ConfirmaSenha;
            localStorage.setItem(email, JSON.stringify(usuario));
            alert("Senha trocada com sucesso");
            window.location.href = 'teladelogin.html';
        } else {
            alert("Senhas diferentes");
            return;
        }
    } else {
        alert("Usuário não encontrado");
    }
}



  
  
  
    const cadastrar = document.querySelector(".cadastro-card button");
    const login = document.querySelector(".login-card button");
    const validar = document.querySelector(".validar-card button");
    const NovaSenha = document.querySelector(".redefinir-card button");
  
    if (cadastrar) {
      cadastrar.addEventListener("click", (event) => {
        event.preventDefault(); 
        cadastrarUsuario();
      });
    }
  
    if (login) {
      login.addEventListener("click", (event) => {
        event.preventDefault(); 
        fazerLogin();
      });
    }

    if (validar) {
        validar.addEventListener("click", (event) => {
            event.preventDefault();
            redefinirSenha();
        })
    }

    if (NovaSenha) {
      NovaSenha.addEventListener("click", (event) => {
          event.preventDefault();
          novaSenha();
      })
  }
  
  