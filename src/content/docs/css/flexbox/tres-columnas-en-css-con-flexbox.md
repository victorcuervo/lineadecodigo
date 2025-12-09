---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGJW63C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZJV0FoENCiLMNXYV7v4zDhhi9PFqhlalcxUTVm%2FMOYAiAuBbZihGebfb9%2BL4ta8LaXg7KlYnGe%2FDzOJKBwLpwL6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BDRIyM7hWXq2u4KKtwDJvb%2Fp1FfsKLS%2FEU1PFUzV8WH1h4YGXR8R%2F5jCUgbKniQ7ZH7AYBRHJbYL9kgCjh3%2BDncAnBiBzizdOAWtgN0Yzv7cseCK%2B0KduA39h8ezevXS4rPqTqOKzNFwJacJvKH6AULgXaLSnzz3jnDqfWlrf3yNBcb5cTMEjh1Uimwq591dj7EzjkP9hE78AFjY9qr7OSz63cK8cywD%2Foi%2BNLeVtjn1ekWQ63I4kMuGJTqboyXLdqzW09GhcAc%2BNTIpQIn%2FiYW%2B5cr8YBqYMOXdgwTWfesRvoitxGGPuXPTTVQn%2BdPVp1e8m64ibSxuJmz5k2iQpBLB95h6uDqxEjYKKaWQFSZjdD108yZve6LY2uNwAbU33GZwQsfSl%2BOCSwKn5s5czhdZ%2FAuN2QC3Ni62XV%2FHoXVW6sFb2wFcto5xVSvQohUea0%2FVDIqcj4WqfHlnEltHpt%2F7i9qj%2FwR3J3Bu6129fRdSguHlV2uWkTWBDIe8nuoDoK0XecrJfi3qy2XDdpS1yYwU%2BEzXJqM2EGXx7AlavJULdO5YI6hVHmKNIuWQN4OKIRdQ50bDB64KixokYZ85tkHZNm9T%2BrlIqdcPtY6symyH%2BG1dsEYb0Mhp9Fd5krcLzPLbpaGgVW%2FEfYwoMneyQY6pgE8cBudMjlBVMGYYpb1iGLIlvS62aIK8P%2B%2Fy6e8O8I6r27XgOBwoa50LaOnYQWniEJwMKQvPPsgAT7udAexeNhGI9ti8hGoOZnfau56X3iC%2Bk9mCevFDMBw7LMGOGnoWIn8HLgSGI4LlgYDs2PJUwe1rqZHOkMvADvXqYYtsFy7SpGaxftRYwh4WwhCLVxwG%2BWadTb7fMjYzl0jWepKhnCvDNK9Hpvw&X-Amz-Signature=357e47137eb39ddbe7449ba5766e68fb83c6cdbe6d334e813890b5d0940b95ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGJW63C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZJV0FoENCiLMNXYV7v4zDhhi9PFqhlalcxUTVm%2FMOYAiAuBbZihGebfb9%2BL4ta8LaXg7KlYnGe%2FDzOJKBwLpwL6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BDRIyM7hWXq2u4KKtwDJvb%2Fp1FfsKLS%2FEU1PFUzV8WH1h4YGXR8R%2F5jCUgbKniQ7ZH7AYBRHJbYL9kgCjh3%2BDncAnBiBzizdOAWtgN0Yzv7cseCK%2B0KduA39h8ezevXS4rPqTqOKzNFwJacJvKH6AULgXaLSnzz3jnDqfWlrf3yNBcb5cTMEjh1Uimwq591dj7EzjkP9hE78AFjY9qr7OSz63cK8cywD%2Foi%2BNLeVtjn1ekWQ63I4kMuGJTqboyXLdqzW09GhcAc%2BNTIpQIn%2FiYW%2B5cr8YBqYMOXdgwTWfesRvoitxGGPuXPTTVQn%2BdPVp1e8m64ibSxuJmz5k2iQpBLB95h6uDqxEjYKKaWQFSZjdD108yZve6LY2uNwAbU33GZwQsfSl%2BOCSwKn5s5czhdZ%2FAuN2QC3Ni62XV%2FHoXVW6sFb2wFcto5xVSvQohUea0%2FVDIqcj4WqfHlnEltHpt%2F7i9qj%2FwR3J3Bu6129fRdSguHlV2uWkTWBDIe8nuoDoK0XecrJfi3qy2XDdpS1yYwU%2BEzXJqM2EGXx7AlavJULdO5YI6hVHmKNIuWQN4OKIRdQ50bDB64KixokYZ85tkHZNm9T%2BrlIqdcPtY6symyH%2BG1dsEYb0Mhp9Fd5krcLzPLbpaGgVW%2FEfYwoMneyQY6pgE8cBudMjlBVMGYYpb1iGLIlvS62aIK8P%2B%2Fy6e8O8I6r27XgOBwoa50LaOnYQWniEJwMKQvPPsgAT7udAexeNhGI9ti8hGoOZnfau56X3iC%2Bk9mCevFDMBw7LMGOGnoWIn8HLgSGI4LlgYDs2PJUwe1rqZHOkMvADvXqYYtsFy7SpGaxftRYwh4WwhCLVxwG%2BWadTb7fMjYzl0jWepKhnCvDNK9Hpvw&X-Amz-Signature=6b19250424a214c689ab75a6e0db9376e83b75be0e8ef4a58fc85910a607a70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

