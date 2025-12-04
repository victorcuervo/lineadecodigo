---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSU3E25%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDpvkFMZgUV7GRK1pPTESijims6gZhbq92Mj4m%2FBFnE%2FAiAtsE%2BIcwIDhr8sBGL9pD9krz5Uz2iL2w31nbr%2FIPUlIir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTgHzEbcMG8BVTJPeKtwDCeyQwxcN%2FJ07agrf1MRIYklNw2u3e0QVYxKMkPuu4FvsXbGypT8tdMcw0Jb2FRjChvLb%2Bf0phj6b60lBbRDGFb9oWJ3OINsR46I3FimwLk2%2FFi%2FYeenzE7hofrh%2B4bw%2F18XhUPphY2tr%2F8mi44Y6fF9%2FvtCbFpH1ZUoReilVM%2FuoPQQIwc%2FTfGJ1QIx%2B49r%2BcQXrRIqd%2BLGWgKR21Jr%2BaF5Y5kxLTYMTMZDLtC%2BkTn5OYHiCJJapNbT3O%2B0CgEi9nExg9oy9QBtcnTcMQ9bUQInPhIh14IP2HKR7ka3t%2BPjXZH9N9rxkUXCfSXTX%2F33x%2FiVt9E01yeYiwukChTB1CN9TjDQ%2Fgf3TzV%2BnVFv12ARYw43kTR%2FuJvuusXO%2By0bx0Y5yw%2Bvyf%2BuTjrFGiR75Wbdgcgdcovye8aut7Ngux7Lq%2FD0E83gV3xLydGXe9TsEiYOWm2vUq%2FNIIBq2DQwhdbfsfmXHDHHYgK1wk2GHS0sHMrdjCgWpcNm9pqI1q2sEWeU%2BIGi%2BjCem4rFlo6c6KEcPpnkrWuu3kbPB8hcR72Nl6jnHpj%2BupmT7t0f2%2B%2BxW3Oc2zhpGQ3eO%2B2pyXA2tTvJiUGUhmixoajb6yBKwGXhE3jb1G3tKrnCU1ywwub7GyQY6pgHdJjv7oBexmHhK9xOTS6tpHZ2etTFKmxLDZTCbCZhamhivGRHqm6PTEON5MsURChcd2t6taC89QoVQo%2FnYa5rHIEnujoxzj7DqQXzp9D4fSyWAdYP4Fq%2FbdBMdhi5bjWnnZWtG1cRziq%2F2NenfdZmG312BOctgn4G1DWbWDkeqRLZsUgiWERAJAtS9vS4Knl6bJzIPYgnwVY6hgKAwj2gUGBFJnZkf&X-Amz-Signature=ce01874bdf16613e9b73fd8a76d218b21acddccf40c0ae0ceb3a8f1c13638686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSU3E25%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDpvkFMZgUV7GRK1pPTESijims6gZhbq92Mj4m%2FBFnE%2FAiAtsE%2BIcwIDhr8sBGL9pD9krz5Uz2iL2w31nbr%2FIPUlIir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTgHzEbcMG8BVTJPeKtwDCeyQwxcN%2FJ07agrf1MRIYklNw2u3e0QVYxKMkPuu4FvsXbGypT8tdMcw0Jb2FRjChvLb%2Bf0phj6b60lBbRDGFb9oWJ3OINsR46I3FimwLk2%2FFi%2FYeenzE7hofrh%2B4bw%2F18XhUPphY2tr%2F8mi44Y6fF9%2FvtCbFpH1ZUoReilVM%2FuoPQQIwc%2FTfGJ1QIx%2B49r%2BcQXrRIqd%2BLGWgKR21Jr%2BaF5Y5kxLTYMTMZDLtC%2BkTn5OYHiCJJapNbT3O%2B0CgEi9nExg9oy9QBtcnTcMQ9bUQInPhIh14IP2HKR7ka3t%2BPjXZH9N9rxkUXCfSXTX%2F33x%2FiVt9E01yeYiwukChTB1CN9TjDQ%2Fgf3TzV%2BnVFv12ARYw43kTR%2FuJvuusXO%2By0bx0Y5yw%2Bvyf%2BuTjrFGiR75Wbdgcgdcovye8aut7Ngux7Lq%2FD0E83gV3xLydGXe9TsEiYOWm2vUq%2FNIIBq2DQwhdbfsfmXHDHHYgK1wk2GHS0sHMrdjCgWpcNm9pqI1q2sEWeU%2BIGi%2BjCem4rFlo6c6KEcPpnkrWuu3kbPB8hcR72Nl6jnHpj%2BupmT7t0f2%2B%2BxW3Oc2zhpGQ3eO%2B2pyXA2tTvJiUGUhmixoajb6yBKwGXhE3jb1G3tKrnCU1ywwub7GyQY6pgHdJjv7oBexmHhK9xOTS6tpHZ2etTFKmxLDZTCbCZhamhivGRHqm6PTEON5MsURChcd2t6taC89QoVQo%2FnYa5rHIEnujoxzj7DqQXzp9D4fSyWAdYP4Fq%2FbdBMdhi5bjWnnZWtG1cRziq%2F2NenfdZmG312BOctgn4G1DWbWDkeqRLZsUgiWERAJAtS9vS4Knl6bJzIPYgnwVY6hgKAwj2gUGBFJnZkf&X-Amz-Signature=8d4e84f2167fe01df386c68129a89e0068995530cee7647f05f210af60d57675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

