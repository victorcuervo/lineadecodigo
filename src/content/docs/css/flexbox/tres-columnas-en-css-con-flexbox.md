---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWQMMIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaJHObiQn6NSrquw9Qjrd%2BSTiNwT3tE73svPm3rgD9iwIhAIGZqFwCAAeXkWVHmd6aLGKGdrWqaAkMyyXocctDNcrpKv8DCHUQABoMNjM3NDIzMTgzODA1Igyz5tVNmhEFzR9Srv4q3AOBvRB5L4AxW14c1P2u7NbDXefo%2BkChyjLY2JdEhiwqWMthJDkmqXSl9kv6pE%2BVb6PSeT32mfwaQnuOjSrTFS%2BTAIOp5V%2FUCriyUjU4TUfs0bk9uMtr8MAtkPG%2Bz5paKMnY74HRYIOzo1MaZGaNoBFgiO64OfryyPlJrk8Ic8CBKGgl55Mof0DIuaiuOMKhAhEJJTJyFepmOs%2BBb5VOzwx%2BkWAWiBbtTK%2BJARWW5s1uk%2F398YbLneMN7Pvk4cUWYnw3AL2D9wk1syiTT2JPEflh1HVtSku2R8DH7lIlES7WmW7mLAHwgsa%2FEQUQJPC72Q4emkOpI75NFrMrK2qweQBB84BYeTMtu3K34KBiWirDB1LS1YU%2FTb1uvppe4YjlUkJhCKBmL4t3CtrazIWBNWHB6tXlIdGsJYNuOSWE%2FNLmIA1vJafAMRc0Cp%2F7%2B%2F%2B2k1X3fCy9bpBmNyR0PxUIgFOOLxYCBlgX8gb%2BMYcKU6DPSpDJJKojnWhmQmXJ3b5fFsDimNzBb8Z4D%2FEPqQvJCo6fyHXBMHTQTKXhIPBinmmFolD8ObUtRpUovbMsowt15Ym2HXMOyPqJrmcpDbUvCPpOgm6jaGO6U1K6xg66cOWA0RZUm2gD3geQsf5OKzClptDJBjqkAb8%2F83O3ass%2BeH7xjPr3%2BxcnT29lPrgySzLSrvn7qbeMTfYKviRKmzzrGXf9MvFzQp7hXRH67HjtIJCvPr3YKN1ppd293ROvgA%2BKTQq9GZdJ2uaQtwFSXx1LRNiflVKBOAWd8ZtqRKaxHwtzm0d8H%2BvVyhFA4DS28K2DwjW%2BYeNmCP16alobj2HOUIF1PtXAobwqXKERd7%2BGY2%2BDG%2B3I4i0%2Fw15P&X-Amz-Signature=1baaf3368b777da22071dc2e96aef9c501c5ae62a9fdaabe173952738436e936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWQMMIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaJHObiQn6NSrquw9Qjrd%2BSTiNwT3tE73svPm3rgD9iwIhAIGZqFwCAAeXkWVHmd6aLGKGdrWqaAkMyyXocctDNcrpKv8DCHUQABoMNjM3NDIzMTgzODA1Igyz5tVNmhEFzR9Srv4q3AOBvRB5L4AxW14c1P2u7NbDXefo%2BkChyjLY2JdEhiwqWMthJDkmqXSl9kv6pE%2BVb6PSeT32mfwaQnuOjSrTFS%2BTAIOp5V%2FUCriyUjU4TUfs0bk9uMtr8MAtkPG%2Bz5paKMnY74HRYIOzo1MaZGaNoBFgiO64OfryyPlJrk8Ic8CBKGgl55Mof0DIuaiuOMKhAhEJJTJyFepmOs%2BBb5VOzwx%2BkWAWiBbtTK%2BJARWW5s1uk%2F398YbLneMN7Pvk4cUWYnw3AL2D9wk1syiTT2JPEflh1HVtSku2R8DH7lIlES7WmW7mLAHwgsa%2FEQUQJPC72Q4emkOpI75NFrMrK2qweQBB84BYeTMtu3K34KBiWirDB1LS1YU%2FTb1uvppe4YjlUkJhCKBmL4t3CtrazIWBNWHB6tXlIdGsJYNuOSWE%2FNLmIA1vJafAMRc0Cp%2F7%2B%2F%2B2k1X3fCy9bpBmNyR0PxUIgFOOLxYCBlgX8gb%2BMYcKU6DPSpDJJKojnWhmQmXJ3b5fFsDimNzBb8Z4D%2FEPqQvJCo6fyHXBMHTQTKXhIPBinmmFolD8ObUtRpUovbMsowt15Ym2HXMOyPqJrmcpDbUvCPpOgm6jaGO6U1K6xg66cOWA0RZUm2gD3geQsf5OKzClptDJBjqkAb8%2F83O3ass%2BeH7xjPr3%2BxcnT29lPrgySzLSrvn7qbeMTfYKviRKmzzrGXf9MvFzQp7hXRH67HjtIJCvPr3YKN1ppd293ROvgA%2BKTQq9GZdJ2uaQtwFSXx1LRNiflVKBOAWd8ZtqRKaxHwtzm0d8H%2BvVyhFA4DS28K2DwjW%2BYeNmCP16alobj2HOUIF1PtXAobwqXKERd7%2BGY2%2BDG%2B3I4i0%2Fw15P&X-Amz-Signature=48734c0a258977fc2a851b79e7f40a4d94d8811016dc079346f524d5c0d77d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

