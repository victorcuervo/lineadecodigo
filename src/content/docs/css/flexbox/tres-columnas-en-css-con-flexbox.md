---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4R64S5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHORMJh59xnoVnQsZlj6i1TMfLhkkXdNmprUVDRdviblAiBKyeaLa2npjGYYIBmcY3evqDtURe1nQYfMF72V1ukpwiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6ia0FZyhA%2Bp1i%2FbKtwD8HFLB7me3LHrjxMVVKe6Cv4nCV197vaIMXuuYht766urh%2F86soPvzj%2BUCLopbySAY2FvAf7e4ISLQow1vymJZCs0WoVFVH%2BHhhZBFtRC9hIlNBgTFPYDXg3SfpNpI0CkgOo%2BoXcTQtCAw262sm5upke1cHKN7bZIYuFnOW%2BlylWCmFyJjEk7dZV7WukTsUFEdw0mX%2BJraLNR%2FT%2Bmdx8e%2Fwz9Levf5ZD2VIZdkO9IZghGWZIfyLkTmtLYZBvkjly0n0SdAZG1xBM9wszMBUTjdQhN4A9uJLXMjDPMfTaCVp6zWUHfXj5uXmADy3an1jiPA4m%2BoSr2FQpuZEmvy5%2FyTsID%2Bixw7rGLwS0uy4KPgJYelbJQz4ZNlN%2BJrNMDJ7cq4YQUQnDOPztF9Y7N63cBtuBdxmsCBTMZuguCUwP4ouDrlQcRC%2FMOziYebc0lXfcxn3gCAsBO861UcjyoEU%2BZ0BG3pT2hXYSXssgPrYOdze7bSAoAiZkQrAExG4aPukCmylogVBnZfKqNajbFGhOf2VyuqcWmCJJLc6DCdKuvay3xOBbgfEZt1C2vce5YmejWUm9NO0%2FP2z1JfFbUufJLl6S8ZjR2PpzfyrfqvDrJrIFE%2BtVt2BRr%2BvgIRxQw%2B63eyQY6pgGGD3Zq6vFcJMv32ukCuKOmiAB8AKLRPU4LQdEw%2BJeij3skyOYAaxnaBv2Xah75pQtoqokMrw49fspMMm7q7exrcjsj%2FcMW0479XRkIL8CEnKOurWtysU5gfvCIAOeoikSfXjgFoX1uzN69i1CfXGfA592uJA%2FqHaUipOcwW1eJ4RpSrwmGrcHpAIb%2B68BbIkjyAK%2F9YA2sZSO9HjkBdV9q0P893nKB&X-Amz-Signature=16261e5adfebb3e9c9677fd5040d3a0aca90e0bea996349ed4391185f2ff690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4R64S5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHORMJh59xnoVnQsZlj6i1TMfLhkkXdNmprUVDRdviblAiBKyeaLa2npjGYYIBmcY3evqDtURe1nQYfMF72V1ukpwiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6ia0FZyhA%2Bp1i%2FbKtwD8HFLB7me3LHrjxMVVKe6Cv4nCV197vaIMXuuYht766urh%2F86soPvzj%2BUCLopbySAY2FvAf7e4ISLQow1vymJZCs0WoVFVH%2BHhhZBFtRC9hIlNBgTFPYDXg3SfpNpI0CkgOo%2BoXcTQtCAw262sm5upke1cHKN7bZIYuFnOW%2BlylWCmFyJjEk7dZV7WukTsUFEdw0mX%2BJraLNR%2FT%2Bmdx8e%2Fwz9Levf5ZD2VIZdkO9IZghGWZIfyLkTmtLYZBvkjly0n0SdAZG1xBM9wszMBUTjdQhN4A9uJLXMjDPMfTaCVp6zWUHfXj5uXmADy3an1jiPA4m%2BoSr2FQpuZEmvy5%2FyTsID%2Bixw7rGLwS0uy4KPgJYelbJQz4ZNlN%2BJrNMDJ7cq4YQUQnDOPztF9Y7N63cBtuBdxmsCBTMZuguCUwP4ouDrlQcRC%2FMOziYebc0lXfcxn3gCAsBO861UcjyoEU%2BZ0BG3pT2hXYSXssgPrYOdze7bSAoAiZkQrAExG4aPukCmylogVBnZfKqNajbFGhOf2VyuqcWmCJJLc6DCdKuvay3xOBbgfEZt1C2vce5YmejWUm9NO0%2FP2z1JfFbUufJLl6S8ZjR2PpzfyrfqvDrJrIFE%2BtVt2BRr%2BvgIRxQw%2B63eyQY6pgGGD3Zq6vFcJMv32ukCuKOmiAB8AKLRPU4LQdEw%2BJeij3skyOYAaxnaBv2Xah75pQtoqokMrw49fspMMm7q7exrcjsj%2FcMW0479XRkIL8CEnKOurWtysU5gfvCIAOeoikSfXjgFoX1uzN69i1CfXGfA592uJA%2FqHaUipOcwW1eJ4RpSrwmGrcHpAIb%2B68BbIkjyAK%2F9YA2sZSO9HjkBdV9q0P893nKB&X-Amz-Signature=056ea688a27ff4f5f67e5a90ec35d54d36486350e75e7c54d53a2c555b3b286d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

