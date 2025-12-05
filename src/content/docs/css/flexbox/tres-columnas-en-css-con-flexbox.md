---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUUNBSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzAaLStGQUihFv0949cleVdUME5vrwDErIgzHLi9wbwIhANR4txCth%2BanHAlaJ3IjmKVByqjJ6o3MtB7HjdEOJCrNKv8DCGAQABoMNjM3NDIzMTgzODA1Igzil%2FMRnu67m8J%2F%2Fj4q3ANb5DIrG27Pya6RI%2BLnEMq%2F%2BbM%2BLU9Rwca0Aepgdi2I7nVraF3CQuINRaaNxSe%2FRWxVo9m5Hco6LFfwHp7uARmY05JWDuTFWVDWOfEV1X%2BsQKMdkzc0uOXUGzOuBwao4zpyfWWWf2R%2BIQvjjnJwivlUVwdg5bQWI4fyVPKanqd7vNrkXUojBTW9Z9Wv6rOcy%2FdiuB73u1PVfAB%2Bw8LOLrBjsEogQWFIYc0AMquPTOd%2FkFGFXXWubV3owcarwZJOACemafQQ5yqCAL2fBw6%2Bb61sKcxRlPI%2FbFMu%2BrmKTWxKdlHUOtibB0%2FJuMMToSks1qbf5Alg4Kom7SOZuo5kwwUTGQwLZf4Aw%2F2wZcQ3A44vJINud3mYimKIlwZidrJxFfG%2FVoIMBU9WW8mrBgmqSjuECsdrjFqT9msRdjZ0pBrbOEznJMw72ffG4Qw85Ksfy2Pnk7W1Fh5Y5PT9%2BAllcenQwNcmbvTE3YW9hUz2dAKW2OAR6CFzsDSJmyrhjDaWw1UDBuBhLnr1sQbHx6Usi3vCzM%2B27JAqu%2BrVebIV22nahRDs0qfZmHCTiXpC9W%2FO55TaYC6cS6vTMiiQtUtlXy%2BPhY66VCpnpOBBUkhoyLcgTA0%2BdP3qkYQlakZ9%2BTCl4cvJBjqkAVItR9Zip992cB2G4yG1k2FVtGpu6rhAmvzz5a5CJ2hoJBPOQVGyKgCoDpD1PEbE9nfSSOfbrl9Dj6IGFyntrVjqGH45zKvt0hnKSt%2FNKJa6Tyrztc7Ejos2C3iYd5r4ftg0SKr56Q1eFX%2FmHtb3FC70BUCrRBrvjBluds5ISMES22pEYcb3U%2BS%2BNS5Rs9Jl3ncCY4aXYM8ek9JLfdybcWroJbF5&X-Amz-Signature=611f7742f4ae43eae7f42747da6d31df8f6c913f99d03db26b1141bce3ecf304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUUNBSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzAaLStGQUihFv0949cleVdUME5vrwDErIgzHLi9wbwIhANR4txCth%2BanHAlaJ3IjmKVByqjJ6o3MtB7HjdEOJCrNKv8DCGAQABoMNjM3NDIzMTgzODA1Igzil%2FMRnu67m8J%2F%2Fj4q3ANb5DIrG27Pya6RI%2BLnEMq%2F%2BbM%2BLU9Rwca0Aepgdi2I7nVraF3CQuINRaaNxSe%2FRWxVo9m5Hco6LFfwHp7uARmY05JWDuTFWVDWOfEV1X%2BsQKMdkzc0uOXUGzOuBwao4zpyfWWWf2R%2BIQvjjnJwivlUVwdg5bQWI4fyVPKanqd7vNrkXUojBTW9Z9Wv6rOcy%2FdiuB73u1PVfAB%2Bw8LOLrBjsEogQWFIYc0AMquPTOd%2FkFGFXXWubV3owcarwZJOACemafQQ5yqCAL2fBw6%2Bb61sKcxRlPI%2FbFMu%2BrmKTWxKdlHUOtibB0%2FJuMMToSks1qbf5Alg4Kom7SOZuo5kwwUTGQwLZf4Aw%2F2wZcQ3A44vJINud3mYimKIlwZidrJxFfG%2FVoIMBU9WW8mrBgmqSjuECsdrjFqT9msRdjZ0pBrbOEznJMw72ffG4Qw85Ksfy2Pnk7W1Fh5Y5PT9%2BAllcenQwNcmbvTE3YW9hUz2dAKW2OAR6CFzsDSJmyrhjDaWw1UDBuBhLnr1sQbHx6Usi3vCzM%2B27JAqu%2BrVebIV22nahRDs0qfZmHCTiXpC9W%2FO55TaYC6cS6vTMiiQtUtlXy%2BPhY66VCpnpOBBUkhoyLcgTA0%2BdP3qkYQlakZ9%2BTCl4cvJBjqkAVItR9Zip992cB2G4yG1k2FVtGpu6rhAmvzz5a5CJ2hoJBPOQVGyKgCoDpD1PEbE9nfSSOfbrl9Dj6IGFyntrVjqGH45zKvt0hnKSt%2FNKJa6Tyrztc7Ejos2C3iYd5r4ftg0SKr56Q1eFX%2FmHtb3FC70BUCrRBrvjBluds5ISMES22pEYcb3U%2BS%2BNS5Rs9Jl3ncCY4aXYM8ek9JLfdybcWroJbF5&X-Amz-Signature=679ecf2a40ec8bd9c6faca3a6792759652849f3ffa6d799e3dc3c11cba741395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

