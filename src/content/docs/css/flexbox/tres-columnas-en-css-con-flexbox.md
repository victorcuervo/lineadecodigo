---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2Z7TVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Z0iCtSlbp40xyE8gTTAt551%2BhSnKywB9eQJg%2F2SndgIhAMNXs0h2zNNQAJf1Sw%2Fak36qdGprjZ8Gu60wxeb7Fqu5KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF9hxy1VXhbc%2Fr0XEq3AOM%2FjjsAySc%2F8lFS%2FY9kQx%2B%2BVxmluN2%2FTkvtgKxWDTO0eALa%2BbQJd704ARyE3Wkv%2Fmou0OgDw1UR4Ar8gn7wvgTb7bqeCfU11z%2BZQTPpefnumkcVImTmbuGDl5YJ2iZ%2BlgUuk0M9DlPkI2gB0FYzSmz4wdOBu8hUaUfa1UcIE0kCaxC%2BWPFcg%2F9%2Fp5dsII7E6j08I0eN%2Fx2Yk%2FFfAzaCW9%2FT%2FORL1zqUqu7AJiTftzCPUou77gkceAw4xeYOPVtDZX1CSatQwMbXu3eJUMySBN3TXAE%2BJLMUPgqImbYL4xdtjiz1WbWLs7f9gXya7mGESEgm1jBlzL50IIIaYMloKDMMhGm0I87aW1BxGSzWp3Gs6dGKYoZFStuJGmXUPD587cThGhUfLIZH%2BU5kUe9ic9PczKzwK0ZLn5HBEMwinmyA3rR05t1kHyWSoeDWLJFU6xCi2u5rjWcyIyC4FnCxPqy4FCk4o20Mt3y4RFTnwXeM6XwjTU5luIIo6OZdHB%2Bm5ukc4sKGNVqez9h99LUEKX0fsdjJ4WdSMn08CJzsYZKzD2N%2B4WUqur6r%2BlsyEi1ciOCBxNwPKcLmirMUEwkNhykkAKPLOUWX19juRonZfEwWY9JxXx3iaXsX6l1yjD7qNfJBjqkAWt%2B%2BzXhHbUAmI0%2FiUvpnNOM%2B4BswgNRW9yGPiRoeCiK8KXmn3S42io9UwgCYT1%2F7b0fg2q4JiMeMFH9CUvya9GWVIvs9Fr%2BTfdYmk9i49VlfI2gractjjlbsBJRq73a%2Bi7k94TvOwLjSz8t109dVAO1VrWGSvYyrNHAH4DJsVJ4BFi%2BbNVf8WmoCfGqQV28o0kHMyPrO1UmdI4AOx4GQy%2FBJjHN&X-Amz-Signature=24b4aac12ab0f6dffc0840d18dfb27818b61bc0ba141589d6eeea3746c712348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2Z7TVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Z0iCtSlbp40xyE8gTTAt551%2BhSnKywB9eQJg%2F2SndgIhAMNXs0h2zNNQAJf1Sw%2Fak36qdGprjZ8Gu60wxeb7Fqu5KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF9hxy1VXhbc%2Fr0XEq3AOM%2FjjsAySc%2F8lFS%2FY9kQx%2B%2BVxmluN2%2FTkvtgKxWDTO0eALa%2BbQJd704ARyE3Wkv%2Fmou0OgDw1UR4Ar8gn7wvgTb7bqeCfU11z%2BZQTPpefnumkcVImTmbuGDl5YJ2iZ%2BlgUuk0M9DlPkI2gB0FYzSmz4wdOBu8hUaUfa1UcIE0kCaxC%2BWPFcg%2F9%2Fp5dsII7E6j08I0eN%2Fx2Yk%2FFfAzaCW9%2FT%2FORL1zqUqu7AJiTftzCPUou77gkceAw4xeYOPVtDZX1CSatQwMbXu3eJUMySBN3TXAE%2BJLMUPgqImbYL4xdtjiz1WbWLs7f9gXya7mGESEgm1jBlzL50IIIaYMloKDMMhGm0I87aW1BxGSzWp3Gs6dGKYoZFStuJGmXUPD587cThGhUfLIZH%2BU5kUe9ic9PczKzwK0ZLn5HBEMwinmyA3rR05t1kHyWSoeDWLJFU6xCi2u5rjWcyIyC4FnCxPqy4FCk4o20Mt3y4RFTnwXeM6XwjTU5luIIo6OZdHB%2Bm5ukc4sKGNVqez9h99LUEKX0fsdjJ4WdSMn08CJzsYZKzD2N%2B4WUqur6r%2BlsyEi1ciOCBxNwPKcLmirMUEwkNhykkAKPLOUWX19juRonZfEwWY9JxXx3iaXsX6l1yjD7qNfJBjqkAWt%2B%2BzXhHbUAmI0%2FiUvpnNOM%2B4BswgNRW9yGPiRoeCiK8KXmn3S42io9UwgCYT1%2F7b0fg2q4JiMeMFH9CUvya9GWVIvs9Fr%2BTfdYmk9i49VlfI2gractjjlbsBJRq73a%2Bi7k94TvOwLjSz8t109dVAO1VrWGSvYyrNHAH4DJsVJ4BFi%2BbNVf8WmoCfGqQV28o0kHMyPrO1UmdI4AOx4GQy%2FBJjHN&X-Amz-Signature=abfed15d9156150d118bba156302128983343e30c25051fa207d821c16ee7b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

