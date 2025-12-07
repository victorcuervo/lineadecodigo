---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZVJVWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwig9GoInjvL7MSE1GPUPC4B3rAMuMeZ5aF3XG9vDBpAIhAMkuoassmjpPcKAXPuRay3CPx2TcqPk4jMZ8Gv7Yols4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9crAbG15xX2K3rq4q3AOg4oKw%2F42eVpjIaq3cLepOhaY7LljBWUgRp5%2FPmd%2BstT%2B7r9fbUR%2BwZvJZxSSwHPjGSOfP63EMNWQlCV1qC6HBKK8cd2BGSwlNopCt9t3CvhbtN2K2MTiWTidmD%2FyV6Jxdw%2B%2BauI799n3uMg6qQyPfgi1p%2By215YsY13tFJwtdWwEHX7%2FX%2FA8zBjtSn%2BRbkFKbyShZNMpWYO6ncrFIF3feSmDdw98O%2B%2BGtvLYqe2VkLe09WsfX1fGrWX1mO3mDdA5Y3RGHyBlhKE0GT8bSDPUux2YDWcukoG8JuB7SCu6cqwiznVuUrK%2FHJ9gkWs53dZxSy3a0uOlfUG%2FC8YTg1O3hD92OezuYbcT6GqhCTa15uOUfOxot2qKdBvuYIKPGoGhHEIM5MtOFLTLs9i9Fshmdk6CFSrA8XIf5IlH16oJMtM1u70koLA%2FJhKmc2YVAoMDQnQ8UGLAbIv4Iq2ikyZGV6t8VyuOvlYThZ%2BqtdLIvEsM0ODBPA5H%2FLqxxt27S2LBR7dvJnWf37%2B878oJ5ijk9jR7i%2BNUwi%2BpwJ%2B7qIMKwd3Sgs4gSKdPHaY5jcDNitmUQemYvEBbxYBRPaTCh3GnqkgTsYzRogE1xV%2F%2Fmdom1A57e6aH44DHB8OD9WTDW%2FdLJBjqkAe6SEjs3qNcz0JuIQyzdexijazMV%2Beyt5B5qv1AMVG%2FaXZi1mZncqhn%2FLA4ONX5cgLylECPmdKv7126xkgAH%2FUxk1wR5WhJvd282p2KuHFcJHE9e6YE5goG5%2FwgTOFkbX4yKJueFI%2F%2BkCIRKgu9q7SyBUfYtc4%2F297R5XGV3T%2BxPnMCLm7Qgp%2FawVpjRpDi3ccj2Pg%2F4wdqHym2e4MJ0%2F57SbyXD&X-Amz-Signature=81ca55d29569fcbea2cad0b2ff157547579dd3191386c912cb638f3ea61832e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZVJVWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwig9GoInjvL7MSE1GPUPC4B3rAMuMeZ5aF3XG9vDBpAIhAMkuoassmjpPcKAXPuRay3CPx2TcqPk4jMZ8Gv7Yols4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9crAbG15xX2K3rq4q3AOg4oKw%2F42eVpjIaq3cLepOhaY7LljBWUgRp5%2FPmd%2BstT%2B7r9fbUR%2BwZvJZxSSwHPjGSOfP63EMNWQlCV1qC6HBKK8cd2BGSwlNopCt9t3CvhbtN2K2MTiWTidmD%2FyV6Jxdw%2B%2BauI799n3uMg6qQyPfgi1p%2By215YsY13tFJwtdWwEHX7%2FX%2FA8zBjtSn%2BRbkFKbyShZNMpWYO6ncrFIF3feSmDdw98O%2B%2BGtvLYqe2VkLe09WsfX1fGrWX1mO3mDdA5Y3RGHyBlhKE0GT8bSDPUux2YDWcukoG8JuB7SCu6cqwiznVuUrK%2FHJ9gkWs53dZxSy3a0uOlfUG%2FC8YTg1O3hD92OezuYbcT6GqhCTa15uOUfOxot2qKdBvuYIKPGoGhHEIM5MtOFLTLs9i9Fshmdk6CFSrA8XIf5IlH16oJMtM1u70koLA%2FJhKmc2YVAoMDQnQ8UGLAbIv4Iq2ikyZGV6t8VyuOvlYThZ%2BqtdLIvEsM0ODBPA5H%2FLqxxt27S2LBR7dvJnWf37%2B878oJ5ijk9jR7i%2BNUwi%2BpwJ%2B7qIMKwd3Sgs4gSKdPHaY5jcDNitmUQemYvEBbxYBRPaTCh3GnqkgTsYzRogE1xV%2F%2Fmdom1A57e6aH44DHB8OD9WTDW%2FdLJBjqkAe6SEjs3qNcz0JuIQyzdexijazMV%2Beyt5B5qv1AMVG%2FaXZi1mZncqhn%2FLA4ONX5cgLylECPmdKv7126xkgAH%2FUxk1wR5WhJvd282p2KuHFcJHE9e6YE5goG5%2FwgTOFkbX4yKJueFI%2F%2BkCIRKgu9q7SyBUfYtc4%2F297R5XGV3T%2BxPnMCLm7Qgp%2FawVpjRpDi3ccj2Pg%2F4wdqHym2e4MJ0%2F57SbyXD&X-Amz-Signature=b907944a629cc98647cdbd69a3d2ba1f59c0d4e0f2e1dc87f8ecea1d7878ee6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

