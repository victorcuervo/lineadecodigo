---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFOFTQ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ0IRV3NOIWxi0ziQyfstg9vPSclyjwrxMJRwLv2iZZwIgAQV3s8XC7cde0jUgOZUqpYiDC1inqcs52pYzeNB4pVwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCGRqccGJny3XSD%2B4yrcA7B%2FP7DIPRAn72Altzp7rDeAOF2tJDKqV2Ne7p4kXysDnyM3tyU3EQ4nzw%2BVGWc%2BjfrwfwQWJwELwrlsohLGn9v8hvRETSi%2Ff4x2Gb6eKAIor5yObdn0jQvo%2BYCAOTG3xb%2FIhB9wetZsUb%2FzVnvOyFaNypPcnjUx0ppxdko%2B9AKjE6ZOa7fnyp1eN6k4laZl7D6QZSOUSdK9ra4zUfkB4Fu%2BH9LMRoFA%2F9uvWWT1jW%2BOhUh9Nx6OZUtG8Jhsj8sNRkbw%2BvPkNgAcY5mupwvCSkSYbLE5LQTLDQE8WZTBAGIfykVwOTPwZogN0rScrl0Dg%2BawlmvhL4sft18z8iemzQCA3Z1SOW31vYXpB0PKENqDGYRrJkB325FTTxHlEH%2FQL0LkeXiR2R4zsR1BQY%2BzEz%2FioehqGXYoDkWR5lEHmRAvpELt8CA%2FTnJZcrwb0c2Py7S%2F%2F9EN1Dve9WG5iB9wdrgVlu8c2dkJX3UXZhlDZmaT%2F%2FYxS6Q4M3%2BvkPdQwBBdeiz%2FN9JzF1CIfpDewvbMVzpbl4ojb8KQ9YKmTkBxAShJDDZMWwO%2FcTFDfdMkZqHca26DQpGMPnN0%2BEAeuDa%2BLQ25WrnFsKQON6E%2BYuVadNf6IL86rJdp%2BDaHBTjUMLbDyskGOqUBRYKdsoLcGgXAo9E2CDzHwdZ1cuzoz7k19m7vzy4tbO1IWnEZR%2Bg%2FW1hDJ978EKcN502eVBNc9ovJiRSJfjBnXKCgPG66tK2W3I1Vr%2B3J29XTqaYAZER8Whl4iRUIx2jeSi468Gu0uMuMRgVUYDA52K%2Fr6mzezCVptYurLQCGAHTee33UfCC1u5Z%2FUTQz6vuw8PLBNg68%2BfnCwQ%2B2NZTkW75AOUsO&X-Amz-Signature=b8d0bdb7895214bb1180a7ca25c32f555ffdeda657a5b8ee620d7ebad8b26723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFOFTQ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ0IRV3NOIWxi0ziQyfstg9vPSclyjwrxMJRwLv2iZZwIgAQV3s8XC7cde0jUgOZUqpYiDC1inqcs52pYzeNB4pVwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCGRqccGJny3XSD%2B4yrcA7B%2FP7DIPRAn72Altzp7rDeAOF2tJDKqV2Ne7p4kXysDnyM3tyU3EQ4nzw%2BVGWc%2BjfrwfwQWJwELwrlsohLGn9v8hvRETSi%2Ff4x2Gb6eKAIor5yObdn0jQvo%2BYCAOTG3xb%2FIhB9wetZsUb%2FzVnvOyFaNypPcnjUx0ppxdko%2B9AKjE6ZOa7fnyp1eN6k4laZl7D6QZSOUSdK9ra4zUfkB4Fu%2BH9LMRoFA%2F9uvWWT1jW%2BOhUh9Nx6OZUtG8Jhsj8sNRkbw%2BvPkNgAcY5mupwvCSkSYbLE5LQTLDQE8WZTBAGIfykVwOTPwZogN0rScrl0Dg%2BawlmvhL4sft18z8iemzQCA3Z1SOW31vYXpB0PKENqDGYRrJkB325FTTxHlEH%2FQL0LkeXiR2R4zsR1BQY%2BzEz%2FioehqGXYoDkWR5lEHmRAvpELt8CA%2FTnJZcrwb0c2Py7S%2F%2F9EN1Dve9WG5iB9wdrgVlu8c2dkJX3UXZhlDZmaT%2F%2FYxS6Q4M3%2BvkPdQwBBdeiz%2FN9JzF1CIfpDewvbMVzpbl4ojb8KQ9YKmTkBxAShJDDZMWwO%2FcTFDfdMkZqHca26DQpGMPnN0%2BEAeuDa%2BLQ25WrnFsKQON6E%2BYuVadNf6IL86rJdp%2BDaHBTjUMLbDyskGOqUBRYKdsoLcGgXAo9E2CDzHwdZ1cuzoz7k19m7vzy4tbO1IWnEZR%2Bg%2FW1hDJ978EKcN502eVBNc9ovJiRSJfjBnXKCgPG66tK2W3I1Vr%2B3J29XTqaYAZER8Whl4iRUIx2jeSi468Gu0uMuMRgVUYDA52K%2Fr6mzezCVptYurLQCGAHTee33UfCC1u5Z%2FUTQz6vuw8PLBNg68%2BfnCwQ%2B2NZTkW75AOUsO&X-Amz-Signature=b6722a3c37923e38a5fe911cb2e53fd8847e1a42645fd5932ef3d9d35ef4e0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

