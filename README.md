# Mini Chatbot Test

Ce projet est un simple test de chatbot utilisant deux API différentes :  

- **OpenAI** (GPT-3.5)  
- **Hugging Face** (GPT-2)  

L'objectif est d'expérimenter l'intégration de ces modèles dans une application Express.js.  

## Installation  

1. Clonez le repo :

   ```sh
   git clone https://github.com/votre-utilisateur/nom-du-repo.git
   cd nom-du-repo
   ```

2. Installez les dépendances :

   ```sh
   npm install
   ```

3. Ajoutez un fichier `.env` avec vos clés API :

   ```sh
   OPENAI_API_KEY=your_openai_api_key
   HUGGING_FACE_API_KEY=your_huggingface_api_key
   MONGODB_URI=your_mongodb_uri
   ```

4. Démarrez le serveur :  

   ```sh
   npm run dev
   ```  

## Utilisation  

Envoyez une requête POST à :

- `http://localhost:5000/api/chat_openai` (pour OpenAI)
- `http://localhost:5000/api/chat_hugging` (pour Hugging Face)  

Avec un JSON comme ceci :

```json
{
  "message": "Bonjour !"
}
```  
Ou demandez simplement dans votre navigateur sur le port 3000 dans le front-end.

Le chatbot répondra avec une réponse générée par le modèle.  

## Remarque  

Ce projet est un simple test et ne vise pas à être un produit final.
