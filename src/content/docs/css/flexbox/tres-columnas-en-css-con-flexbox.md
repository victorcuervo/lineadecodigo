---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU67II3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiWIHymlggWQj1ZiZgms08IH3YTH2Lz7Tvn5Bz6mpqrAiEA5VydoLxyPtlNkpAcFnqrfPhV%2BozkMnNLTmnCHMftX2kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnwjBq6PClgWEFd7SrcA8RTWnq7WM%2BV3yGEYZqF7Tgot2DHr2skpfS1Nb%2FSyQKfW1hcP65Z1G4remtX4Za7yz1OgIcZ6ny2YgY%2FblP1nDFVG89d217HLklpw3u59fqkC5HtiBga2LlNCI04%2F5wOhHDHuNVu3zzNIgiq6E9hTyaYTzsKSeFIHnvcA0LpxDb3gLC6ixZrAXXdyDmHr7Rv%2FY2344eTxVZCJ07SQbxYhUXRj1itvsZ4og1iC8sXzYLAFF%2BUx2scugK8xP%2FRKI2rhVcvXmW40cwb0Q4zlzVPR9fJLnGOtgbva6fAoeBCT37kdh7fkfXpjpLXZvjSTvNZ5dqqYdg4hjmZPHeLRM8e3IJXWL7OWfiDNzOv0c1%2BjkZpIGmPgb1MS1lJLfWbQ6yJGEQWyYqsjO9FKPnDJwmyG9KlBGu3wb6V2YOkMbdEQ87Fu7oWYC3xFMBq6CWo8djqBoLuljRYP8VYuAGwv9B8BLX%2FTSWXMJZDOguQn1coo70m07zGNskgC2zkKeCRYSrcfJ1Mg7zi2QE%2BkwB1jS%2ByiPbq0A5lUAD0ktncY%2FoTst5CzZ00SFF5vwJI0IMfeB%2Fp9BVwCUZz3ayVdGJFgXYehH6Girjf1kd6qB9%2BqaVBej%2BCV7VFJs33yPWxVxW9MPem0MkGOqUBaZiu07dRyP84MLmr9xX%2B768l%2FlPw4lm8dZI0Rfn%2BdXFOSFBj0UHhBkufZV4njVOM6JX2A8ewuNvgzbx0s5vlluVNSOsz%2FGcxDMON84IYGFr4yuHNocDbXhzf1ud1CF6ml3BhDj%2BV%2Bk65MZcPxtxrNnPXXYV6GUYjpFN33J07CGXoD8rEYujx1q5mxI8Xl1urHo1i58JV0DtUuWJK7qNANmOtUUAL&X-Amz-Signature=85c2c7f4a0540ea5ca76afc9f69ae8b57d89840381aa8ae8753cf52ee54daa45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU67II3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiWIHymlggWQj1ZiZgms08IH3YTH2Lz7Tvn5Bz6mpqrAiEA5VydoLxyPtlNkpAcFnqrfPhV%2BozkMnNLTmnCHMftX2kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnwjBq6PClgWEFd7SrcA8RTWnq7WM%2BV3yGEYZqF7Tgot2DHr2skpfS1Nb%2FSyQKfW1hcP65Z1G4remtX4Za7yz1OgIcZ6ny2YgY%2FblP1nDFVG89d217HLklpw3u59fqkC5HtiBga2LlNCI04%2F5wOhHDHuNVu3zzNIgiq6E9hTyaYTzsKSeFIHnvcA0LpxDb3gLC6ixZrAXXdyDmHr7Rv%2FY2344eTxVZCJ07SQbxYhUXRj1itvsZ4og1iC8sXzYLAFF%2BUx2scugK8xP%2FRKI2rhVcvXmW40cwb0Q4zlzVPR9fJLnGOtgbva6fAoeBCT37kdh7fkfXpjpLXZvjSTvNZ5dqqYdg4hjmZPHeLRM8e3IJXWL7OWfiDNzOv0c1%2BjkZpIGmPgb1MS1lJLfWbQ6yJGEQWyYqsjO9FKPnDJwmyG9KlBGu3wb6V2YOkMbdEQ87Fu7oWYC3xFMBq6CWo8djqBoLuljRYP8VYuAGwv9B8BLX%2FTSWXMJZDOguQn1coo70m07zGNskgC2zkKeCRYSrcfJ1Mg7zi2QE%2BkwB1jS%2ByiPbq0A5lUAD0ktncY%2FoTst5CzZ00SFF5vwJI0IMfeB%2Fp9BVwCUZz3ayVdGJFgXYehH6Girjf1kd6qB9%2BqaVBej%2BCV7VFJs33yPWxVxW9MPem0MkGOqUBaZiu07dRyP84MLmr9xX%2B768l%2FlPw4lm8dZI0Rfn%2BdXFOSFBj0UHhBkufZV4njVOM6JX2A8ewuNvgzbx0s5vlluVNSOsz%2FGcxDMON84IYGFr4yuHNocDbXhzf1ud1CF6ml3BhDj%2BV%2Bk65MZcPxtxrNnPXXYV6GUYjpFN33J07CGXoD8rEYujx1q5mxI8Xl1urHo1i58JV0DtUuWJK7qNANmOtUUAL&X-Amz-Signature=db0563c7a2042f82962c45103814865431df9e7db0e9bdb28978e524df0af6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

