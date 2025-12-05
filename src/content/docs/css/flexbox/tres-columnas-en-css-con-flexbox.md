---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMGT5EC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl0EIHHVHe0sme3ig1LwHADBLhAbWD%2F6F8X%2FjqmdxocAiAsgJtarKNXOdzR%2FaidYBWHa81kWEyLjrYLsnq6DtQuRir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdMZf%2FSiyHQc7Qf6ZKtwDYDCNv3TogE3mj4YCY8EjKIaL3Aufbn9ta1hrksrX5RxrEgbNzhn4Y4jck5iFcT8DHJOFYpWIMZT2quoQvThC0Em1un2A5VaFhZXOczui85wPQCmT%2F8ehYvEu3A3x5FFgv4dPI8AU45pCcSoAbDcFLkT8EQlWrcH%2FCcQ51J3DhlEJbFLG1zE3YpyZRz0BFJho9CNM%2BZZVe4ehg06d7a7lN9iLZSdn1VI0yjyp7wP8lYOBad%2B3RznSzStRK%2F5W%2FvRSwpMujdwLmiqdSJYJYC%2F%2BHzY5YiPAYxWV4AH6j7wBIq7iFoswvJ5fsbup3is7RPJlhp2b6x0Bf3f2iy0%2F5ClcranSTfFt%2FeHKECtS2S2vyAenqgKpr%2FZUbv96dm5Tm1y3H5N0wv%2BRdsl4%2Bd%2BPEbRgUSkKWKtI8QBNhZY%2FxpSNl4iqJAvsUcW49pItNyZShZUiNMN1%2Bzu5EMiIzwtxDX%2BEUbgyq00w%2FSfDXyQilWMsQcyGOzm17zBYoVetypuVgdUERthEJR1WhMMcDrGvZK%2F6PBPufjC98p5qi6js0uHMN7K17%2B1vzHgUXA%2FbTA3tpwnPw0tAF7BHhFPGdnv%2F99ztx3l5QcChZyBakrzVBUgZok8EePPlXWS3M9zlRjkwmMjKyQY6pgGiwS9OyNX2u59%2FlJNUJ2fCBblUuz7WDG0BT1SZM3wRb%2BBilKkJ6QcYtW9J28go7swJ3U2dDpqg726yz6HF0WYwaiYopgB9B0kU2Df3nvydtZ4oBjkimkEFaipYVAgmmlDjSvO%2FrelkxtssLavq%2BHDWkNWTf69zVGRpS42kCkkWhY%2By7zYsM%2BUmKUtEJYZkOFWHTRMEr8No8dsGz2UFQ1C2SDMOXiLB&X-Amz-Signature=9a6e6d09b09e5e068d6781c041f18c6962c45478277e0e82a12d47a88959a465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMGT5EC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl0EIHHVHe0sme3ig1LwHADBLhAbWD%2F6F8X%2FjqmdxocAiAsgJtarKNXOdzR%2FaidYBWHa81kWEyLjrYLsnq6DtQuRir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdMZf%2FSiyHQc7Qf6ZKtwDYDCNv3TogE3mj4YCY8EjKIaL3Aufbn9ta1hrksrX5RxrEgbNzhn4Y4jck5iFcT8DHJOFYpWIMZT2quoQvThC0Em1un2A5VaFhZXOczui85wPQCmT%2F8ehYvEu3A3x5FFgv4dPI8AU45pCcSoAbDcFLkT8EQlWrcH%2FCcQ51J3DhlEJbFLG1zE3YpyZRz0BFJho9CNM%2BZZVe4ehg06d7a7lN9iLZSdn1VI0yjyp7wP8lYOBad%2B3RznSzStRK%2F5W%2FvRSwpMujdwLmiqdSJYJYC%2F%2BHzY5YiPAYxWV4AH6j7wBIq7iFoswvJ5fsbup3is7RPJlhp2b6x0Bf3f2iy0%2F5ClcranSTfFt%2FeHKECtS2S2vyAenqgKpr%2FZUbv96dm5Tm1y3H5N0wv%2BRdsl4%2Bd%2BPEbRgUSkKWKtI8QBNhZY%2FxpSNl4iqJAvsUcW49pItNyZShZUiNMN1%2Bzu5EMiIzwtxDX%2BEUbgyq00w%2FSfDXyQilWMsQcyGOzm17zBYoVetypuVgdUERthEJR1WhMMcDrGvZK%2F6PBPufjC98p5qi6js0uHMN7K17%2B1vzHgUXA%2FbTA3tpwnPw0tAF7BHhFPGdnv%2F99ztx3l5QcChZyBakrzVBUgZok8EePPlXWS3M9zlRjkwmMjKyQY6pgGiwS9OyNX2u59%2FlJNUJ2fCBblUuz7WDG0BT1SZM3wRb%2BBilKkJ6QcYtW9J28go7swJ3U2dDpqg726yz6HF0WYwaiYopgB9B0kU2Df3nvydtZ4oBjkimkEFaipYVAgmmlDjSvO%2FrelkxtssLavq%2BHDWkNWTf69zVGRpS42kCkkWhY%2By7zYsM%2BUmKUtEJYZkOFWHTRMEr8No8dsGz2UFQ1C2SDMOXiLB&X-Amz-Signature=99782dfdc002ad948de7491a53d124d1ae0305a4156adbe481ad5c2fbfdf4f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

