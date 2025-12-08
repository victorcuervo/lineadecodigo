---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2IPEUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnanBHeCxwGO2bjQBp7YGGHJeUY2NDm%2FD7c18T6zY2HAiEAhHNqooJQyDJSX2zPni3yqWNiB8DORFZObCBHPMBuUt4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGdMzEyJPOCjIOY3SrcA2PzL9Z7TE6gIbCJSGlZsSyPFM5%2Fqb5xYFUS70rrbudO8jOfgoKFmL4gayukYIvs3dE%2FEPO17wFgfJV1OeZ%2FUgKgueu8FE2eAhZ%2FvqS%2B8WdqmyeavSK0OZoHeBQtPshu5FxsCYe6FVIIpk%2FrmArMVmoz%2B2yUOSWGq8xFvYdYr%2F4tlOMgjXxuuVgYCNRSNCQsmed575%2BFdslxud7C36QE2HJ%2BPMrmeydAQhfJCzeLMwfdNnD6LNOU7MMc%2F%2BOWiegrJZYMHxKmsucvgUw3is06A9RJa5RUIV4BC49Hn%2FSWq%2FvqB90Eta4VVC005VSubuGs9CSQvs6Zfk1w0MVEiF%2FjXqdoLqzedzkdn3voCYQMTVwJm%2BIB6CbQvi4OzAdS%2BrkZPAFyqgWNrmxMCVGizleVYikSuJgSBM2ZeRWapkLUcsXi1jHBrLnsSAHD3yDGuQTFqGXfuKl9w9JlUsp3vRBLeftfNatqZaf%2Fy%2B%2B7AU92j7HL6cRKRrQ5XFYV8rW%2B%2BiSForwChPwtEoW3p4xNROIi0WgRa%2BjB%2BBZtkO7Zv%2FLxDSeIdhgjBuWxRxxeoTv6aNEAs%2BzFgzJftrMAr3D%2FuItvW8kHROeEZ00qwVF%2BPjqzh8QSEz2m2AVJLW4SW76uMKOH3MkGOqUBJ4BZntzK4XbhRxlgYG5grJZEt74x7Za8NlBStlLOwSa4Haswccm52Xm5fVT5UOUukggyovp5tgX8sSdKbX3GA59b0W2c1IHpHum1kMmIRQ4yO%2B%2F5dXGk71PhyzcEGujVya7aRZMiZkxOHAo8%2FYW9pG%2FbsLfs6rhRXtsFBFDJljLytIXZeUVjRw7V567X97ILZ2ny3kYY64EGct41JEPj00p7lsmc&X-Amz-Signature=8913237582a273382b1597ca0ff90132e67ef0744f94f44944e088ac60716393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2IPEUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnanBHeCxwGO2bjQBp7YGGHJeUY2NDm%2FD7c18T6zY2HAiEAhHNqooJQyDJSX2zPni3yqWNiB8DORFZObCBHPMBuUt4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGdMzEyJPOCjIOY3SrcA2PzL9Z7TE6gIbCJSGlZsSyPFM5%2Fqb5xYFUS70rrbudO8jOfgoKFmL4gayukYIvs3dE%2FEPO17wFgfJV1OeZ%2FUgKgueu8FE2eAhZ%2FvqS%2B8WdqmyeavSK0OZoHeBQtPshu5FxsCYe6FVIIpk%2FrmArMVmoz%2B2yUOSWGq8xFvYdYr%2F4tlOMgjXxuuVgYCNRSNCQsmed575%2BFdslxud7C36QE2HJ%2BPMrmeydAQhfJCzeLMwfdNnD6LNOU7MMc%2F%2BOWiegrJZYMHxKmsucvgUw3is06A9RJa5RUIV4BC49Hn%2FSWq%2FvqB90Eta4VVC005VSubuGs9CSQvs6Zfk1w0MVEiF%2FjXqdoLqzedzkdn3voCYQMTVwJm%2BIB6CbQvi4OzAdS%2BrkZPAFyqgWNrmxMCVGizleVYikSuJgSBM2ZeRWapkLUcsXi1jHBrLnsSAHD3yDGuQTFqGXfuKl9w9JlUsp3vRBLeftfNatqZaf%2Fy%2B%2B7AU92j7HL6cRKRrQ5XFYV8rW%2B%2BiSForwChPwtEoW3p4xNROIi0WgRa%2BjB%2BBZtkO7Zv%2FLxDSeIdhgjBuWxRxxeoTv6aNEAs%2BzFgzJftrMAr3D%2FuItvW8kHROeEZ00qwVF%2BPjqzh8QSEz2m2AVJLW4SW76uMKOH3MkGOqUBJ4BZntzK4XbhRxlgYG5grJZEt74x7Za8NlBStlLOwSa4Haswccm52Xm5fVT5UOUukggyovp5tgX8sSdKbX3GA59b0W2c1IHpHum1kMmIRQ4yO%2B%2F5dXGk71PhyzcEGujVya7aRZMiZkxOHAo8%2FYW9pG%2FbsLfs6rhRXtsFBFDJljLytIXZeUVjRw7V567X97ILZ2ny3kYY64EGct41JEPj00p7lsmc&X-Amz-Signature=32c93435209dc5a007bd47a035e2a4191f1838713896621ac14012dd6eb45b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

