---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5BB4CJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj12z0SQaB8UJ9hUeQ%2F3%2F3Kc0G2c6TX5QFSp1GydL6eAiAZHP3F%2F87vIqKaqojIo3rTXxoCKyC94VDiefHM8UuCvCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2kYj3i5Yzy5zhCTKtwD0qe%2BmcQjpw0KnnwfomQo2ZqruZt5PtrKKxSJ5PSjt7%2B5KLzRjWZVu58z1IRsQZoRc5PrHPaNrn8Su96p2TrqdkNhFMpsH4QlXE9NWxnOGJfDYQbZDBr0doIQIGxDTu1%2FBv%2B77fMQe%2Bi4tf1Iein%2Fg5WUPcrYGoszxqTJAxKB4QOCyTBT41xBIJA2C14uAQOomQvoADzPNVYqK5JlFHNC5hpLCEy5E%2BQNrjy3B2GGuG0pnQK0QAutuvtLLmIAQ%2BIg4JixQwAN1IngLUFgUH8f%2B3iT5EkyDlXHPUfSPHptQfsSrYQUY8GLV7Ye%2FsHhnvraf9QaR73MiahAjFe3jHALvOaO4pyevI%2B4UDS2RGj%2Bf91haHrsv%2BEkGFM9498UBP79j%2B1YvhXKqtM2epU6t038g6LZOr5qsTYatALV3aa1%2FTeN5sNz23via5uuEZQm4bOTvtDBzTyyuO4m%2BWr6NYymqd59cyXmCcqgt9TIAJyerCPtlS664xkBf%2BlXvI0MDnxUcOQhUTI0k6lTqWFp5STowvDtEYlG2aoJDDjtcqQQPFjsa4iw7ocqrcFyHe28aVh6zFDarQAb3SWy3hDpskCIYwxU7mvhHNP8q%2Fy3alxcZvS7JaiIc70ep1qhqFowk%2BXbyQY6pgG6mIgdWZCj6aD31sqVFA8Q2cUXjJx1hg7zE4hsU8tGkTJsFXdGZwXNCDgQ6iFbyo7tiqvG1f8I%2FmY7pNOhtd7qSUjExtDZixDRT4WwibrJDDtcCNaiymT%2FdwyAKIaKnr1kkW8I8GVQ5aPLomxYnNi8iFE0aHHF8RcId2G1uey%2BbBDCjnyy1bayDz3LH66uYNv5QhZ0vJicCpuEOoIZAhwn6O245Dfw&X-Amz-Signature=56484d4d44180a7a17f06e82cbdd85f3c9b6108b3dae003416c45e56e5676878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5BB4CJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj12z0SQaB8UJ9hUeQ%2F3%2F3Kc0G2c6TX5QFSp1GydL6eAiAZHP3F%2F87vIqKaqojIo3rTXxoCKyC94VDiefHM8UuCvCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2kYj3i5Yzy5zhCTKtwD0qe%2BmcQjpw0KnnwfomQo2ZqruZt5PtrKKxSJ5PSjt7%2B5KLzRjWZVu58z1IRsQZoRc5PrHPaNrn8Su96p2TrqdkNhFMpsH4QlXE9NWxnOGJfDYQbZDBr0doIQIGxDTu1%2FBv%2B77fMQe%2Bi4tf1Iein%2Fg5WUPcrYGoszxqTJAxKB4QOCyTBT41xBIJA2C14uAQOomQvoADzPNVYqK5JlFHNC5hpLCEy5E%2BQNrjy3B2GGuG0pnQK0QAutuvtLLmIAQ%2BIg4JixQwAN1IngLUFgUH8f%2B3iT5EkyDlXHPUfSPHptQfsSrYQUY8GLV7Ye%2FsHhnvraf9QaR73MiahAjFe3jHALvOaO4pyevI%2B4UDS2RGj%2Bf91haHrsv%2BEkGFM9498UBP79j%2B1YvhXKqtM2epU6t038g6LZOr5qsTYatALV3aa1%2FTeN5sNz23via5uuEZQm4bOTvtDBzTyyuO4m%2BWr6NYymqd59cyXmCcqgt9TIAJyerCPtlS664xkBf%2BlXvI0MDnxUcOQhUTI0k6lTqWFp5STowvDtEYlG2aoJDDjtcqQQPFjsa4iw7ocqrcFyHe28aVh6zFDarQAb3SWy3hDpskCIYwxU7mvhHNP8q%2Fy3alxcZvS7JaiIc70ep1qhqFowk%2BXbyQY6pgG6mIgdWZCj6aD31sqVFA8Q2cUXjJx1hg7zE4hsU8tGkTJsFXdGZwXNCDgQ6iFbyo7tiqvG1f8I%2FmY7pNOhtd7qSUjExtDZixDRT4WwibrJDDtcCNaiymT%2FdwyAKIaKnr1kkW8I8GVQ5aPLomxYnNi8iFE0aHHF8RcId2G1uey%2BbBDCjnyy1bayDz3LH66uYNv5QhZ0vJicCpuEOoIZAhwn6O245Dfw&X-Amz-Signature=e459efb009139b13379ed1d12794c5c09c3c53ec2248d3e40fd4452fe4fdc054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

