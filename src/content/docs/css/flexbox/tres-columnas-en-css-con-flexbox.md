---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTNSFAKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXL9cb1zJsqdSzwEi1HRTD5YZvXs5aERENPd8kClRw5AIhALus1uqLpkoOGHOZyxngESdqKo7F0%2FiU4B709mXXOE1fKv8DCGEQABoMNjM3NDIzMTgzODA1IgyTuXUUdNLtq4k3KSIq3APImKgvSQ1e10RTF62D8tv0xlweyqmpRGzEm%2FBisEupPNrFGI2899RrCqlujWKRzCOwnW24NbsZDsSr8m6xWCoR4DrQvuVlqJt0H5E0Nbvp8Lic8BKGDJ%2FEynOIyGr8OShBCd7XVJg2l6P7wixSJRA%2Fx%2FbNGD06nWNRAXN9fC0CgUUGu54iNe86KfmrZJ2oaMp47U8lpfaKQwVaHo4S9Mp7fIDF2ZOtBcyzImbWXR8KL%2FP4qihE4v6EmiSbqQO22vQJsKXSwcQbW3seD9Qwf7SctxG%2B8uQ0Zcv3MfHYNpTnaMK0hHn8bQ2KVk2fMw6ss48Cgeapg9znO7IMwum8HZfPBM0k%2Bq1LzKnbnUgES3FvPVssT0lOcAgbLckdM9csAejcJ66MLcIY57i9Sc2JfoFOzSBWwGp0KdXNrTCGj1wlqnjcRvrmwdMkhrJlfooMYNuc68%2F2EUz07V8G4P7C6ZQpfKI6sadwIZK5s7KNZqVwD7awtg%2FHcsa%2F7HUDbRk8gBfpdtyndBv%2FVBarZ8%2Bdp%2FBBhMQTsHsji1kuORgSmbrkm0YZ4UMU0%2F%2FfxDbAYpMCQ0IwqYSg%2Fn1URmOIYiWEqdf0nqthdSHmIP8j19TAHMRyGvKJy93fHwdJy%2F8BHzCz9svJBjqkAWf%2Br9Fa5OI7RnOBZ70AIzP2Cej9r2ZCBd1uLKDaV%2Bwwf%2F5TDOzmVe1Slng5299V7mVuA9%2FCrZWxJob3DDX4KyllEhJgAGoEUIOcy7ElOCTiJPVKVIqZbzLP4EFNV7ufM9oDxxv1gApqaWoi1Gs%2FWL%2F4IWoEXVrVPSyFoi%2FoQwCP3vtpW%2B4pMXbHUSe4XIGX476cdMdRsMlrj2h9Ml9xW9d9MCB3&X-Amz-Signature=0c4dd448823c73fff0225d49b115c4993108d95d0f8953a7dd36a984723d3885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTNSFAKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXL9cb1zJsqdSzwEi1HRTD5YZvXs5aERENPd8kClRw5AIhALus1uqLpkoOGHOZyxngESdqKo7F0%2FiU4B709mXXOE1fKv8DCGEQABoMNjM3NDIzMTgzODA1IgyTuXUUdNLtq4k3KSIq3APImKgvSQ1e10RTF62D8tv0xlweyqmpRGzEm%2FBisEupPNrFGI2899RrCqlujWKRzCOwnW24NbsZDsSr8m6xWCoR4DrQvuVlqJt0H5E0Nbvp8Lic8BKGDJ%2FEynOIyGr8OShBCd7XVJg2l6P7wixSJRA%2Fx%2FbNGD06nWNRAXN9fC0CgUUGu54iNe86KfmrZJ2oaMp47U8lpfaKQwVaHo4S9Mp7fIDF2ZOtBcyzImbWXR8KL%2FP4qihE4v6EmiSbqQO22vQJsKXSwcQbW3seD9Qwf7SctxG%2B8uQ0Zcv3MfHYNpTnaMK0hHn8bQ2KVk2fMw6ss48Cgeapg9znO7IMwum8HZfPBM0k%2Bq1LzKnbnUgES3FvPVssT0lOcAgbLckdM9csAejcJ66MLcIY57i9Sc2JfoFOzSBWwGp0KdXNrTCGj1wlqnjcRvrmwdMkhrJlfooMYNuc68%2F2EUz07V8G4P7C6ZQpfKI6sadwIZK5s7KNZqVwD7awtg%2FHcsa%2F7HUDbRk8gBfpdtyndBv%2FVBarZ8%2Bdp%2FBBhMQTsHsji1kuORgSmbrkm0YZ4UMU0%2F%2FfxDbAYpMCQ0IwqYSg%2Fn1URmOIYiWEqdf0nqthdSHmIP8j19TAHMRyGvKJy93fHwdJy%2F8BHzCz9svJBjqkAWf%2Br9Fa5OI7RnOBZ70AIzP2Cej9r2ZCBd1uLKDaV%2Bwwf%2F5TDOzmVe1Slng5299V7mVuA9%2FCrZWxJob3DDX4KyllEhJgAGoEUIOcy7ElOCTiJPVKVIqZbzLP4EFNV7ufM9oDxxv1gApqaWoi1Gs%2FWL%2F4IWoEXVrVPSyFoi%2FoQwCP3vtpW%2B4pMXbHUSe4XIGX476cdMdRsMlrj2h9Ml9xW9d9MCB3&X-Amz-Signature=cb744db6d2b6c1a0571d58a3c68160ebbd1944347854ab71900733c2d356fa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

