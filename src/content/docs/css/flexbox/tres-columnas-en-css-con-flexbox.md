---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEMM5H4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSM4jlKJTqmdBKbnptKcWcdEnHxfJOKwzapOXBF56isAiAutlNlkXzmI6OWwIxzLnX8YqY%2BrLjd9QiVQDkTyC9ebir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMsL5IUxMIY3C3zflfKtwD1nAM%2F44ayMdNVDRxJEX1UtOrU8V%2BtpO3SPHpwYqlhkbYCZMlMHWTXj%2BBP3FQdxNH5bmWtPY3VVgrTo4dODGbk0lOo6D3us4TmxYt9YwXg6JXProgU2Etw74NDiP%2FyMyRPWFZLFmteHwdmn0NCO0Q54PzGgPHJTJ7sv89F%2F4L3SIKygQxnsu8LeMksidSzTGHGfJ0Val5ffuxCG%2FYIrKGNB6DIjPyGg9hpoFfsq36yTNKeHnEVrkZzlkrPRlFwNMQv817XqgGrZNr7x108EYlgY31uh4D%2BK7f25fo1Fc14vg398%2Bg82Vsa3DVG%2Bxd%2B1URAj5UlLI3P3mWvh99ppJu3T0C6bKj8SQvKUv2WChaQBL2GcyiPNKUlOMconxI89goc19I50A7y2MRErsGEOHb1uln42I2hhzLt8%2FeAQpWT4pq0C%2Fu2f%2FqMdISIt3wPH1WRdZK3DjKHudiLTJrHryGPT3alc8LcMyQTPBn2rJ%2FVwKwi4G96XMmEz9IuTH8Y5ZOju0Qu%2BfkYQMAUL2ldPeFpK0buoPeQ25gZq9B8Y7XFQqLLpIJh2GTxlJIwKw8P30aTJi1HBWKjAl2M1tIVIWZFaySNinjRYmAAQ2UxR8eZMtPh7dQNObvarhlzZQwvrzPyQY6pgHkQwEqzf9e0%2B%2FlqMlqTe6yWVpx2T74%2F3qVc1YfXnfvN9%2BOnybtMxcpz0LctQ%2FQy%2FtwOrXIYNT5GnU6H1564nwuTfCAik2Ig7zPUQ8H8%2FPndH5ZThu2IAAQvrSL3r47qLWeUCzDA7CchynUEJ0p%2Fr7ypuKdgVwieBT8Kr1WSXfNlPzKNOS%2BH0T2o5aRsk5xeRjSLjziFjKkbxhLAKK749cTJVR2HJVe&X-Amz-Signature=ef939c0b40b7071552dfa72dc9097811bd5efe73d4ca7de4638892577ba2a920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEMM5H4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSM4jlKJTqmdBKbnptKcWcdEnHxfJOKwzapOXBF56isAiAutlNlkXzmI6OWwIxzLnX8YqY%2BrLjd9QiVQDkTyC9ebir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMsL5IUxMIY3C3zflfKtwD1nAM%2F44ayMdNVDRxJEX1UtOrU8V%2BtpO3SPHpwYqlhkbYCZMlMHWTXj%2BBP3FQdxNH5bmWtPY3VVgrTo4dODGbk0lOo6D3us4TmxYt9YwXg6JXProgU2Etw74NDiP%2FyMyRPWFZLFmteHwdmn0NCO0Q54PzGgPHJTJ7sv89F%2F4L3SIKygQxnsu8LeMksidSzTGHGfJ0Val5ffuxCG%2FYIrKGNB6DIjPyGg9hpoFfsq36yTNKeHnEVrkZzlkrPRlFwNMQv817XqgGrZNr7x108EYlgY31uh4D%2BK7f25fo1Fc14vg398%2Bg82Vsa3DVG%2Bxd%2B1URAj5UlLI3P3mWvh99ppJu3T0C6bKj8SQvKUv2WChaQBL2GcyiPNKUlOMconxI89goc19I50A7y2MRErsGEOHb1uln42I2hhzLt8%2FeAQpWT4pq0C%2Fu2f%2FqMdISIt3wPH1WRdZK3DjKHudiLTJrHryGPT3alc8LcMyQTPBn2rJ%2FVwKwi4G96XMmEz9IuTH8Y5ZOju0Qu%2BfkYQMAUL2ldPeFpK0buoPeQ25gZq9B8Y7XFQqLLpIJh2GTxlJIwKw8P30aTJi1HBWKjAl2M1tIVIWZFaySNinjRYmAAQ2UxR8eZMtPh7dQNObvarhlzZQwvrzPyQY6pgHkQwEqzf9e0%2B%2FlqMlqTe6yWVpx2T74%2F3qVc1YfXnfvN9%2BOnybtMxcpz0LctQ%2FQy%2FtwOrXIYNT5GnU6H1564nwuTfCAik2Ig7zPUQ8H8%2FPndH5ZThu2IAAQvrSL3r47qLWeUCzDA7CchynUEJ0p%2Fr7ypuKdgVwieBT8Kr1WSXfNlPzKNOS%2BH0T2o5aRsk5xeRjSLjziFjKkbxhLAKK749cTJVR2HJVe&X-Amz-Signature=1530cce65461738c9cc4a4b6b6cd4bb3c569ef19082a99a36eb0653551625a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

