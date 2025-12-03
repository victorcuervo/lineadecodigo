---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMAGMLLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH4npBi8HQwMNdzIAP8zC%2BECETcIPjJES93BhFvNQ%2FhFAiA5HNO3ltrybADEAdKdYK2Xrsc0bU2NYIIzlsM5KrgH4ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBnnOk7rqOGZxKhBiKtwDgw3VHV6a9vSu0Eer3W5Rs4POWmh15pjMjtTqk3O3jCGBhEW4ibJzeOb1CWjHKPi39AmTsCPVJHkBomU8Kusa%2FVYsLvtp4jptfyi12ZPdR6fdSoF0jhgNhSkXEAPgFlKia%2BHFfXp2TQ%2BrkzqPAdzv3Sy1FOu0IkgDUKEKOwE2STzpY9ztUzmxjArlal%2FmKg7LFW8c96QuRyu6n2DeRKeGSGYc4YQJjloa%2FtAuE3vog7vdDKwVSEScQTt%2FPrjAM4%2FCZ29X0ACPIBXYWYmO%2B6XNzQF92gtcDdnK9j4FQAMTWkw9SQBxEEx8UUbZgADV22qcfH9U5i5Z552LjDzs5A%2BL20gBhGUIDYXfRYQYVUTPfFWAI9rpgWbgxN%2Blq50F7wjECtrsm2xlwD8lOlaUX47MzJ6zJDecIfvmU9b82yZskp%2FkW67SUmxM8wOLmi8abSI2ujLp%2BJpdtGCENFVw3eWC9plC6fUWkduRsrICmVysxlZAvac4IO4s2cvsEef1MzHIibRAiA1JnTFp%2FpLjUuvbqQWvse%2ByIVqzcnFszdRVfumHtQzwbGdgP63xOfiCKabuirQXuLdKdqA%2FTmAhuZ7CFU%2BirWSofN%2B1jmsbypCudY%2FjzlofQdOLxSyOJDMwq5i%2ByQY6pgGC56pNDv8I0GffEDJuNzGI8nSUGzhnTDdXu0GGR0zUE6cYNxOBksaItw8cqt3f5jpeTxrWLQxAIkXHyFTGVlbaAqsDgaGPfWBGd8uPETCrb1Q52cll0%2FavGg8ii%2FQuYKaE3DWQp6A%2Bb83412vD7hJjTk7fC1cBvqs3v4QLVw%2FoHjf7gUbCpoN0pibMUJF4YJ3%2Fa0eK1QQqsnpc5YhKFlrd3Zbu5GNo&X-Amz-Signature=0891cd91fca5db02c51c589c063485d166e84172ee687459eaccdfe5dc659004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMAGMLLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH4npBi8HQwMNdzIAP8zC%2BECETcIPjJES93BhFvNQ%2FhFAiA5HNO3ltrybADEAdKdYK2Xrsc0bU2NYIIzlsM5KrgH4ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBnnOk7rqOGZxKhBiKtwDgw3VHV6a9vSu0Eer3W5Rs4POWmh15pjMjtTqk3O3jCGBhEW4ibJzeOb1CWjHKPi39AmTsCPVJHkBomU8Kusa%2FVYsLvtp4jptfyi12ZPdR6fdSoF0jhgNhSkXEAPgFlKia%2BHFfXp2TQ%2BrkzqPAdzv3Sy1FOu0IkgDUKEKOwE2STzpY9ztUzmxjArlal%2FmKg7LFW8c96QuRyu6n2DeRKeGSGYc4YQJjloa%2FtAuE3vog7vdDKwVSEScQTt%2FPrjAM4%2FCZ29X0ACPIBXYWYmO%2B6XNzQF92gtcDdnK9j4FQAMTWkw9SQBxEEx8UUbZgADV22qcfH9U5i5Z552LjDzs5A%2BL20gBhGUIDYXfRYQYVUTPfFWAI9rpgWbgxN%2Blq50F7wjECtrsm2xlwD8lOlaUX47MzJ6zJDecIfvmU9b82yZskp%2FkW67SUmxM8wOLmi8abSI2ujLp%2BJpdtGCENFVw3eWC9plC6fUWkduRsrICmVysxlZAvac4IO4s2cvsEef1MzHIibRAiA1JnTFp%2FpLjUuvbqQWvse%2ByIVqzcnFszdRVfumHtQzwbGdgP63xOfiCKabuirQXuLdKdqA%2FTmAhuZ7CFU%2BirWSofN%2B1jmsbypCudY%2FjzlofQdOLxSyOJDMwq5i%2ByQY6pgGC56pNDv8I0GffEDJuNzGI8nSUGzhnTDdXu0GGR0zUE6cYNxOBksaItw8cqt3f5jpeTxrWLQxAIkXHyFTGVlbaAqsDgaGPfWBGd8uPETCrb1Q52cll0%2FavGg8ii%2FQuYKaE3DWQp6A%2Bb83412vD7hJjTk7fC1cBvqs3v4QLVw%2FoHjf7gUbCpoN0pibMUJF4YJ3%2Fa0eK1QQqsnpc5YhKFlrd3Zbu5GNo&X-Amz-Signature=c9b2b01be61b38beebbcf928dca36512611124d26693069741bedd6e7ce80dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

