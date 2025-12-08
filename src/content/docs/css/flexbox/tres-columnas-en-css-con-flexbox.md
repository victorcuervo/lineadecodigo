---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWZSADF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18cLkBSU6g7FlmitwPCIZq2JXXWUNhGM8T0p0rtxE5AiB%2Fb8%2FB%2F48S1jsIWy3IW50AezUPzEwrm9sBRVBdMoWorSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG78OSe6usZnarD2QKtwDCPb%2FPGVbefLqXKLHsy1Jpq0cjYMjhXJYUdoLh%2BMDXp4NHlUa2tLrdTLqCep0DR2HVcgM3a5iWQWaPABlOUdsx%2FCovXYKXKfh0HVtZmduxhyEn6WjvxVqP6lGEotJ27mzplOUXzZ9oxaOZPeYFD00OyFP15LSgObK%2BtA1qFmwoSsCbF8lrXFXTyBgNTlXBNx9A8CuE8h3d6AI9x9xYNwM9%2FaxDoZklYHpRC8BWja4Qmufd5lQgZmL1RPfg%2Fq3CVsuq5mjuEgpfnHuaVLUS0t%2Bc9CXHXve58GSbPfJs1HQqQCArppIINLpZJTCJD%2BfMCHDJVinRqrU87VxZX3xuJ2h2rvcugZxwzXtTpZelmBngf5IncnHM2jTYi5k2vQ6y7oc5O5laDnxYiFmBKQ7uMzuOq%2F%2Fo%2B0RmTm65oHasITRQ78mcfRynDC%2BxVCbYYW8lr0C86ny%2BnZihvBsQ8y1Vd8d%2B7zD6xgFFY8M8c2fE2f32MRLdQJygJZFsPu%2F1NiMrIw3iSlXiEDPHgQY1IdI9Vn4eMrsjWd%2F%2BdNSG3EU%2FRe9EeSGSticnJ1tEg%2BSKbqRyWGdUlVk5Gs8ag2iYeibMyuKds44yRcaXFXKXVTQanZLwS8onmEtism%2FWHWrs6Iwvs%2FZyQY6pgEKQJMJefKuqfqPRIcTCdRoMcW008%2Fcs9DOs8Hu6fnhMRubHzCN2rmNpLXI2EWxOt5HgoaCtKSJX0rta2OFNd4dnYW0FeK4Ex5nfsAhrty%2BgMVob%2FeVPyYgK%2BjYiipy9ToHyeEmJp%2FE3OiuSEnYYryfYnUKZ7KFDrDzdY8tRgIYS2DPhEde7wyF1VQUmpO5wsxNEkd3%2F3YgZKaualsFDjMHQsUaynPz&X-Amz-Signature=e1cf7739eea8a72f603d86e5cf327dcf83d02a4867d11ef5c20d706f2061f901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWZSADF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18cLkBSU6g7FlmitwPCIZq2JXXWUNhGM8T0p0rtxE5AiB%2Fb8%2FB%2F48S1jsIWy3IW50AezUPzEwrm9sBRVBdMoWorSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG78OSe6usZnarD2QKtwDCPb%2FPGVbefLqXKLHsy1Jpq0cjYMjhXJYUdoLh%2BMDXp4NHlUa2tLrdTLqCep0DR2HVcgM3a5iWQWaPABlOUdsx%2FCovXYKXKfh0HVtZmduxhyEn6WjvxVqP6lGEotJ27mzplOUXzZ9oxaOZPeYFD00OyFP15LSgObK%2BtA1qFmwoSsCbF8lrXFXTyBgNTlXBNx9A8CuE8h3d6AI9x9xYNwM9%2FaxDoZklYHpRC8BWja4Qmufd5lQgZmL1RPfg%2Fq3CVsuq5mjuEgpfnHuaVLUS0t%2Bc9CXHXve58GSbPfJs1HQqQCArppIINLpZJTCJD%2BfMCHDJVinRqrU87VxZX3xuJ2h2rvcugZxwzXtTpZelmBngf5IncnHM2jTYi5k2vQ6y7oc5O5laDnxYiFmBKQ7uMzuOq%2F%2Fo%2B0RmTm65oHasITRQ78mcfRynDC%2BxVCbYYW8lr0C86ny%2BnZihvBsQ8y1Vd8d%2B7zD6xgFFY8M8c2fE2f32MRLdQJygJZFsPu%2F1NiMrIw3iSlXiEDPHgQY1IdI9Vn4eMrsjWd%2F%2BdNSG3EU%2FRe9EeSGSticnJ1tEg%2BSKbqRyWGdUlVk5Gs8ag2iYeibMyuKds44yRcaXFXKXVTQanZLwS8onmEtism%2FWHWrs6Iwvs%2FZyQY6pgEKQJMJefKuqfqPRIcTCdRoMcW008%2Fcs9DOs8Hu6fnhMRubHzCN2rmNpLXI2EWxOt5HgoaCtKSJX0rta2OFNd4dnYW0FeK4Ex5nfsAhrty%2BgMVob%2FeVPyYgK%2BjYiipy9ToHyeEmJp%2FE3OiuSEnYYryfYnUKZ7KFDrDzdY8tRgIYS2DPhEde7wyF1VQUmpO5wsxNEkd3%2F3YgZKaualsFDjMHQsUaynPz&X-Amz-Signature=64988d5cca37e35110fb4e9644d3f8425b51d372f621395d5b8f614dbab76459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

