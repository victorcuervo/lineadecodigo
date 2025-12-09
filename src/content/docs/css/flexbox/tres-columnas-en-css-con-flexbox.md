---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOEIDFE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlkqbMfckt%2B%2FmV0GPXkzYwxLUKvZ2vHfpFi36xL%2BjHhAiEAyVMiBbCoFFvhmIoG0gIPyY3CnWqw3KFtAuBaLRxL5U4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVlmNjXO4AsRrcbTCrcA%2BWJgGkyhRHeR%2B4C36NsXEDykvx03h26nY0VSeaRyTNh19FiGrAb6AWzd1hrB6vBRb6A5EjZJYY6%2BWiD14Yzz6KZwdjKUtbzdDLxRuFeVxpIKzd256XjF325yDMKq0vqz50qnu2QgKMUOcLtRYKS%2BttwzLLNdufskckHyZYm6Nnc4P%2B8au709NWQTf4eh5Yc2ZwBq4Bgst2FuEu6pBggsEwIOmWqjJmrzF0qpdUmgRNKLAcXgYt4viuuvUvMHwxLY3KCO1FYCBHtNeFqcmns18MZ8Ftm10n2bUIiJY78yPTH2xhFAU81mihcrbmQNIzTy7p%2Bmo%2F1P07GjV4cHRdRkei8Rkk%2FAaEo38XjgJU6eBLvtRhgFxXqk50HmpFDvjT4tKzlNlDRnvC5LfazpXkocmF%2Fy0Jv1HvEI20LLT0C8g2rjhMB3aa0B2DINUfV7BkqybnjeZEkNOBM3DF4vFMoi8D%2FijnpQaO98yN5TdUM3hcaNXahSySgxMB%2BjfjdzGeFg%2FA16iFvT0cV3Ilve8KIhmEYMqDSVbr3GdmIoRXO%2FlGDb8fY0ZLL7FBQsNsMrFs247V6ev2sn7up8BeObBNvn0rO%2BQOeWOpb8cJG%2BJeeBAP576k9LoyKcRGVhX2hMP6j38kGOqUBbBlDby%2FlzmTTQe8TnaeoLvjy7d47OXuC%2Fb%2BsHqZVVcQ9zFPUKPKeM1TzjUdXALGlbrYMt03MNlaSAoN0MCYRYq0PqJdCbJkGFVUouhC1kVIoWAgYDL8lMdd3%2FsCr5hcK2N%2Bn909pNeNrIelJP842Bt67ss%2BzW%2F2yxsvwmev5dYGFoGZJ29lZvGTLn%2FXEt8kxqtHa1d4TYDvJlPgEun1okcVsgwsi&X-Amz-Signature=0e87fe68c27689948e8775cea4e30704d94c412e6ed62f14a7f04dc2d6d7e731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOEIDFE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlkqbMfckt%2B%2FmV0GPXkzYwxLUKvZ2vHfpFi36xL%2BjHhAiEAyVMiBbCoFFvhmIoG0gIPyY3CnWqw3KFtAuBaLRxL5U4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVlmNjXO4AsRrcbTCrcA%2BWJgGkyhRHeR%2B4C36NsXEDykvx03h26nY0VSeaRyTNh19FiGrAb6AWzd1hrB6vBRb6A5EjZJYY6%2BWiD14Yzz6KZwdjKUtbzdDLxRuFeVxpIKzd256XjF325yDMKq0vqz50qnu2QgKMUOcLtRYKS%2BttwzLLNdufskckHyZYm6Nnc4P%2B8au709NWQTf4eh5Yc2ZwBq4Bgst2FuEu6pBggsEwIOmWqjJmrzF0qpdUmgRNKLAcXgYt4viuuvUvMHwxLY3KCO1FYCBHtNeFqcmns18MZ8Ftm10n2bUIiJY78yPTH2xhFAU81mihcrbmQNIzTy7p%2Bmo%2F1P07GjV4cHRdRkei8Rkk%2FAaEo38XjgJU6eBLvtRhgFxXqk50HmpFDvjT4tKzlNlDRnvC5LfazpXkocmF%2Fy0Jv1HvEI20LLT0C8g2rjhMB3aa0B2DINUfV7BkqybnjeZEkNOBM3DF4vFMoi8D%2FijnpQaO98yN5TdUM3hcaNXahSySgxMB%2BjfjdzGeFg%2FA16iFvT0cV3Ilve8KIhmEYMqDSVbr3GdmIoRXO%2FlGDb8fY0ZLL7FBQsNsMrFs247V6ev2sn7up8BeObBNvn0rO%2BQOeWOpb8cJG%2BJeeBAP576k9LoyKcRGVhX2hMP6j38kGOqUBbBlDby%2FlzmTTQe8TnaeoLvjy7d47OXuC%2Fb%2BsHqZVVcQ9zFPUKPKeM1TzjUdXALGlbrYMt03MNlaSAoN0MCYRYq0PqJdCbJkGFVUouhC1kVIoWAgYDL8lMdd3%2FsCr5hcK2N%2Bn909pNeNrIelJP842Bt67ss%2BzW%2F2yxsvwmev5dYGFoGZJ29lZvGTLn%2FXEt8kxqtHa1d4TYDvJlPgEun1okcVsgwsi&X-Amz-Signature=e7adbe36b5fb1f56b1f95c92a170aaa50f373c59c4fb5d7ed6b03c7ab9b64b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

