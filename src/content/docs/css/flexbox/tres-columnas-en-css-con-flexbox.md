---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625RZAVFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FOT3T%2F8xhc95ZpogFEHJTJ7F3DRseXJ3jcuI2tHRdHAiEAx8Jze8SvjrKFfUdPkQq6vilIVQ%2FtKuC5EQhXJlF0F0UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmsnLCt%2FwpGhe8ojircAxXoMkFfDzxLWEVO9h7Pmv8vIQHyj0L%2BFFot6bif%2BM1YKGfno0xAJVpqyaSnN%2FIT51wlWk%2BJ%2BPbWxqZhBXS91ZAbtiODBIHH19XTwKw3EdzeinjZqO3kMB0rEAPi8wNg5Xr8W%2BRVlqKS7t7oU%2BDXVoJ8BtCUjLESm4x%2Bd5i28AFj%2FQ%2Bl7q8lGX51BdM7RcU%2Bj9yzqm2Tjge435UFUvBJ%2FOZlc64b%2FoSMoQRy%2BppLEJjG0Y%2By1ws5K3y%2Feijp9bfhsfWhK9rA9Aq%2F1TeJzQgcQ%2B3BoD7Il8yx8%2F0iLjtzyaKtrFyccysP5RgmtODLFFQgOMRJu9%2BgJOIbZHtPFdVmLmzzcXMIp2OmEpVDvrtiNyuepQSst%2FVSTy0ANDGtrE%2FBWG7Lxw%2Fe5YrB%2FNsu9CFhH902NtW7MiRlAmcZNctDC3U6EHvvZWohbWRnXRkyDSiV1t%2B78xjQaBqEvErpjt2Wb6TaVyWjy1rBPWuH2SD9aMBQR9Y%2BDGHQcW6UVVbYx7C%2BbXcfzcIy0aoh%2FfZAX6FERl8P9sg%2FqKjfK1qSuTHE8cOYO%2BeksIvmag0ySBcv%2FBa8QCVaTjwtczQnwk4lkiCDjSaoJszfXo8nocHzCOsp6Q5UWRRJFMOj1ndvoqw2MLrD3ckGOqUBfUOKsC6VPmi2aeneQbLHR09nTDtkxmSHipxBr%2BbixDA7%2F2gfAV%2FcjaIdVmnCOuALIF5CLxOK%2BjVum1X5smyzAWaQRrbO0EmyKz6EmqDvXzNRf15IkFAwCaYuyJ2VeYEG5ikLEKDbnN0IkIGeSvVLmGms2P6WEPTZ8fUfqQyWgQlr4XNqcUv5g4v%2B83d5%2FZU5wChIem94yR8pBeq7ixcwg3kfYlLz&X-Amz-Signature=23bfb6d54830b47168581b7ebe48436e4e9bdd319114c0bf1f994df6f012a876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625RZAVFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FOT3T%2F8xhc95ZpogFEHJTJ7F3DRseXJ3jcuI2tHRdHAiEAx8Jze8SvjrKFfUdPkQq6vilIVQ%2FtKuC5EQhXJlF0F0UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmsnLCt%2FwpGhe8ojircAxXoMkFfDzxLWEVO9h7Pmv8vIQHyj0L%2BFFot6bif%2BM1YKGfno0xAJVpqyaSnN%2FIT51wlWk%2BJ%2BPbWxqZhBXS91ZAbtiODBIHH19XTwKw3EdzeinjZqO3kMB0rEAPi8wNg5Xr8W%2BRVlqKS7t7oU%2BDXVoJ8BtCUjLESm4x%2Bd5i28AFj%2FQ%2Bl7q8lGX51BdM7RcU%2Bj9yzqm2Tjge435UFUvBJ%2FOZlc64b%2FoSMoQRy%2BppLEJjG0Y%2By1ws5K3y%2Feijp9bfhsfWhK9rA9Aq%2F1TeJzQgcQ%2B3BoD7Il8yx8%2F0iLjtzyaKtrFyccysP5RgmtODLFFQgOMRJu9%2BgJOIbZHtPFdVmLmzzcXMIp2OmEpVDvrtiNyuepQSst%2FVSTy0ANDGtrE%2FBWG7Lxw%2Fe5YrB%2FNsu9CFhH902NtW7MiRlAmcZNctDC3U6EHvvZWohbWRnXRkyDSiV1t%2B78xjQaBqEvErpjt2Wb6TaVyWjy1rBPWuH2SD9aMBQR9Y%2BDGHQcW6UVVbYx7C%2BbXcfzcIy0aoh%2FfZAX6FERl8P9sg%2FqKjfK1qSuTHE8cOYO%2BeksIvmag0ySBcv%2FBa8QCVaTjwtczQnwk4lkiCDjSaoJszfXo8nocHzCOsp6Q5UWRRJFMOj1ndvoqw2MLrD3ckGOqUBfUOKsC6VPmi2aeneQbLHR09nTDtkxmSHipxBr%2BbixDA7%2F2gfAV%2FcjaIdVmnCOuALIF5CLxOK%2BjVum1X5smyzAWaQRrbO0EmyKz6EmqDvXzNRf15IkFAwCaYuyJ2VeYEG5ikLEKDbnN0IkIGeSvVLmGms2P6WEPTZ8fUfqQyWgQlr4XNqcUv5g4v%2B83d5%2FZU5wChIem94yR8pBeq7ixcwg3kfYlLz&X-Amz-Signature=fb6f6b381ffa2087f401fd920f93cb8170d7d68a448b58db36a80ab4098deaa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

