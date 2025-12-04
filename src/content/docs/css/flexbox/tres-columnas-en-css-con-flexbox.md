---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCTR2H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCL8ooIANTJ%2FOombRbfc8yYiwkwhe8I4n%2B0j7my5x%2FNaQIgECJr6WJS2OyAdDPpTr2jOxJXmyUTFzb%2BuhfJjzqhwW4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDA7kR5c2tkMpJiR8LCrcA1a5BgXGTleVzK89%2Fn3eEBxcKTKRC1oVNLOfOiqy%2F0ZCAAiAbYQ62NIFyWpLf14LlN3GTDllRQKS5aZhY%2Fx%2ByvL5sXlzLbRJTJc3HE8v50%2BNMgUKljawsSxzMQVWWj%2BPEFbwfEvWRKtCG89mY%2BpUbFGg42OtvQ2BINgBwmFmXZZ%2FyJ%2B347Hxe2Rf0FliwfMtf52buynFVBNG7JP4%2FLfBtqDAWKwpmg5rxD08SHlXyVMBv0ABAbdzHtUst3mkGMvzYa0AeB5hfg3oJGUDrROwT%2FdI67sx7t0YKPo%2FarOitEcFWqFBpYc9AGKYaUSo%2FLqNKgNMoJVHCSBzm1Nqkq3ecG9pN9WT8lANdkclZfXJoX0%2FSIJCLHtjSmlaCDkMBRbSFUVDAifRHhZzu%2BDv6go9B2FkbMTcdYyqVMXoObJIiLKskFUQKX%2FGIilTFOoZkmgwcGjdQm6a24%2Bnrg5LSbPXW3ghkM8F3Ug2gcFcntYzvikneVm0HLK4dTioXkRP3E2AZyZHIDrKCPppk%2B%2FyBMBHs2tD%2F70qy3uEaEqL%2BkFZ6uIEZ3CBdVGJm%2BMhvrdUI5B5F%2FTPIzQcQAmAZPvIhrcD3McIxch8R7OD80D6RROyjnts19SAFNWOjbVk70P0MKiQxMkGOqUB%2Ff6xNkbQ09ZvICsTSiycwLCH96HVLcrj1jCX07hDmLj6Er5Y98At8FIZHIaWKbgdtlDyeNOKANIC%2F5goZ3SpDZDky428yB3gOJz0NbdUDfAbfCcWTlIUsXI7oNjcFAr5NGqUhJrJZ6c9gG%2BiBJOlUo1j5PsHV1wvrWtVqsdQSGP6ulH48GlfKejBz9S2fvV7Q17ZJUMlFR07L87TbgKc31M8SM5I&X-Amz-Signature=5b4e9fa634dc0ff712fc27d428cea554fe3c70db0e8122c8bc447dff8126a157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCTR2H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCL8ooIANTJ%2FOombRbfc8yYiwkwhe8I4n%2B0j7my5x%2FNaQIgECJr6WJS2OyAdDPpTr2jOxJXmyUTFzb%2BuhfJjzqhwW4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDA7kR5c2tkMpJiR8LCrcA1a5BgXGTleVzK89%2Fn3eEBxcKTKRC1oVNLOfOiqy%2F0ZCAAiAbYQ62NIFyWpLf14LlN3GTDllRQKS5aZhY%2Fx%2ByvL5sXlzLbRJTJc3HE8v50%2BNMgUKljawsSxzMQVWWj%2BPEFbwfEvWRKtCG89mY%2BpUbFGg42OtvQ2BINgBwmFmXZZ%2FyJ%2B347Hxe2Rf0FliwfMtf52buynFVBNG7JP4%2FLfBtqDAWKwpmg5rxD08SHlXyVMBv0ABAbdzHtUst3mkGMvzYa0AeB5hfg3oJGUDrROwT%2FdI67sx7t0YKPo%2FarOitEcFWqFBpYc9AGKYaUSo%2FLqNKgNMoJVHCSBzm1Nqkq3ecG9pN9WT8lANdkclZfXJoX0%2FSIJCLHtjSmlaCDkMBRbSFUVDAifRHhZzu%2BDv6go9B2FkbMTcdYyqVMXoObJIiLKskFUQKX%2FGIilTFOoZkmgwcGjdQm6a24%2Bnrg5LSbPXW3ghkM8F3Ug2gcFcntYzvikneVm0HLK4dTioXkRP3E2AZyZHIDrKCPppk%2B%2FyBMBHs2tD%2F70qy3uEaEqL%2BkFZ6uIEZ3CBdVGJm%2BMhvrdUI5B5F%2FTPIzQcQAmAZPvIhrcD3McIxch8R7OD80D6RROyjnts19SAFNWOjbVk70P0MKiQxMkGOqUB%2Ff6xNkbQ09ZvICsTSiycwLCH96HVLcrj1jCX07hDmLj6Er5Y98At8FIZHIaWKbgdtlDyeNOKANIC%2F5goZ3SpDZDky428yB3gOJz0NbdUDfAbfCcWTlIUsXI7oNjcFAr5NGqUhJrJZ6c9gG%2BiBJOlUo1j5PsHV1wvrWtVqsdQSGP6ulH48GlfKejBz9S2fvV7Q17ZJUMlFR07L87TbgKc31M8SM5I&X-Amz-Signature=c00acb8cfe1295cc6057fa3097c0e6b8e72be3fce0bd27858ece2bdb6ab12190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

