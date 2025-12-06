---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XELEXFAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnCtgus9F3Hz9%2Bm8e5ktuAnMAAbWDSPZQxfr%2Foz5jBHAiEAxZAVfp2OIpCho0OfFQSQWjryzURctO0LQ%2BSkZ7bvaBUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFEydlfDtpC3UpzFnircA03SMGTsiu82PONTwlwBnhzYv9cBSEXy2THt7zCQhvpJvRflibTnnR40FAckEpHr6aIRvviJrPpyplAoI7gAMg2hzEkIfR3p23DHP5q6NGjlRctobZHQNbpx8DmcNrVyYFm5XauZKK7NFiN5vQKcm8pj1AWRaANDIU1k8BeHVOIGDNNyJ74uUmw%2FsDPQldGTMxMRRUigxl1FQb7ZxIWi9MabE%2FM50P50KTTk0RxeVH1%2BaO3iVzN21WrZHiXFSJDifwYNJIezvMVRBLKA5t7N17yJtVaTpxLOyiBMM0PXYIsZANhrI%2FJEoq4OYOgZzvDeNlV85x%2FVDr0wIpE3oxFoET1F4sea8sRchTI8Y3KDlw8IkFI6FfbXiMA49jajV7GjiL1vrvoMnTj%2BzZLRgiSpC7ceqlW7rARDyiMeZMMlR8vOzLiYFDzI%2Bsftl1kuomOrjO2LvIZG8dha7OOoGNGW%2BVrbTZFgR86CiVQZezC84Uki6Q%2FCgU0XEjMwHlB7aE5BHrHQzB96rqgczr3FYhNHQWtVhe3hF9vkMqkDtHdmnOhbL6GSEAW78yg10VSNgMWwnZ%2FQS8S0xI6xhCX4yWOEKBIE3a3HO9ek8BuRIQiGPDPmCU5a2thRawqLFc%2FJMLT9zskGOqUBJUr4m4%2B8GSTrtbmOWNmmGEwvs0lLakmv2IhSyExx3oAcwZe%2BXsSNi%2BDwn1F8gmi8O0aNKvsguA%2FacavAf19ts5kbRMByg%2B0z9cUk3k8KrqjyJQcEL5nqn0%2BEyfiUcZecevOZJBVQkgv2xqy%2FIWwG0kX6sSQBZX0lwS%2FUakq59RFRKT%2BmuG8G3Nawl359gYaU5vIFhY7ylBh4Yy1JjaXXmamnZuY%2F&X-Amz-Signature=934fea6759109978b72e16dbba15a3b0c091358c2dd4d90c9a56f0afd0f6a56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XELEXFAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnCtgus9F3Hz9%2Bm8e5ktuAnMAAbWDSPZQxfr%2Foz5jBHAiEAxZAVfp2OIpCho0OfFQSQWjryzURctO0LQ%2BSkZ7bvaBUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFEydlfDtpC3UpzFnircA03SMGTsiu82PONTwlwBnhzYv9cBSEXy2THt7zCQhvpJvRflibTnnR40FAckEpHr6aIRvviJrPpyplAoI7gAMg2hzEkIfR3p23DHP5q6NGjlRctobZHQNbpx8DmcNrVyYFm5XauZKK7NFiN5vQKcm8pj1AWRaANDIU1k8BeHVOIGDNNyJ74uUmw%2FsDPQldGTMxMRRUigxl1FQb7ZxIWi9MabE%2FM50P50KTTk0RxeVH1%2BaO3iVzN21WrZHiXFSJDifwYNJIezvMVRBLKA5t7N17yJtVaTpxLOyiBMM0PXYIsZANhrI%2FJEoq4OYOgZzvDeNlV85x%2FVDr0wIpE3oxFoET1F4sea8sRchTI8Y3KDlw8IkFI6FfbXiMA49jajV7GjiL1vrvoMnTj%2BzZLRgiSpC7ceqlW7rARDyiMeZMMlR8vOzLiYFDzI%2Bsftl1kuomOrjO2LvIZG8dha7OOoGNGW%2BVrbTZFgR86CiVQZezC84Uki6Q%2FCgU0XEjMwHlB7aE5BHrHQzB96rqgczr3FYhNHQWtVhe3hF9vkMqkDtHdmnOhbL6GSEAW78yg10VSNgMWwnZ%2FQS8S0xI6xhCX4yWOEKBIE3a3HO9ek8BuRIQiGPDPmCU5a2thRawqLFc%2FJMLT9zskGOqUBJUr4m4%2B8GSTrtbmOWNmmGEwvs0lLakmv2IhSyExx3oAcwZe%2BXsSNi%2BDwn1F8gmi8O0aNKvsguA%2FacavAf19ts5kbRMByg%2B0z9cUk3k8KrqjyJQcEL5nqn0%2BEyfiUcZecevOZJBVQkgv2xqy%2FIWwG0kX6sSQBZX0lwS%2FUakq59RFRKT%2BmuG8G3Nawl359gYaU5vIFhY7ylBh4Yy1JjaXXmamnZuY%2F&X-Amz-Signature=78ce0ea6cef6d23890a81da316588fd1d9d1e85d756c84153950f4bd44a91060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

