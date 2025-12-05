---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB63VIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGiGLWuQrYJXEnG9wSgbWUJBEb5fjGqilzgPB3CdHMFwIhAOlMBHTwIFprI4IaYkQB%2FNAxYtGy7GhgjFv2Um8i2Tw1Kv8DCGAQABoMNjM3NDIzMTgzODA1IgwweMOpOO3lxt4ENNYq3AMGcFRz%2FhOmXwIW8lknIVgtNtKIoAFD1I5w62hH5kp%2BuW3wiZc3U3YWZPAKCq%2F86Kk10rBsG7ZoLCSw8Tl2OGqCELmtO7f%2BOeYiWpISg2PCo4Hwl2%2F3kfnoIBxQMge1UZlXkAL5BYHWLP9Td%2FMCff7XovdFVuIn0YX0XPwDTuQYNsAHLrS%2FK2rRjJOnB4x48Ei3MJK03gkjaNRjwDUv%2F295Vzu4Siw73TWGLVGVarTOQCqC2HBj0Lg2f3feOFjsP6It%2F4QDbkC0narI1NKZKX7b8NpuDDdZK3VnWAoRzDtl1dF5siZU97dUCxOaU0OPPco0zSt%2BV6Yzm4Xtx8rxyGsHdynXcZfgh1YL5bS%2BmqtaEVpRLp99Dh8oSrHa69rZ7wBCSdBQfWLiut6CZLolRJSuxijN0ebWV9huCP46iVi16Qnpv8KraYwvtSOUvqlic4YBLTjZP5%2F06O5IaCt%2BLGtuXCc6dhTj8FLcHItulqCZXlaHXSwoLlJVVW3IQhIPk0NHobLLoTnEK%2B3SDV3LPnOEdHfnszSZE1nrT7H3szoZXYnpeKFvnylfbbZc5VadIzkTo0B0d1HCQzG7MdUamRuMfYN2wgg3EIP86%2BwflpJdwG045R4nmODJst6pbjCN7cvJBjqkASePS67FxT2TT9TE3CbuwZERmHmlFcv%2F3n6Yy1zxrCIaI%2FIi7wVfrfX22K5BQkSVeSZv8Q3c20%2FZGdwr6Mle1PY%2BszLXmjKsuEOnZthwhQ5HmV6NyvDCt0p6KO6pUKipqP0w%2FBZ65qA60iMQLRYqm7njafqz22uiaL5TUvZ6GPqXnAg6g9xy%2F8%2BYbOuE8wE36%2B2u6RX6XZ30lJEEhc9un8Q0z%2Baa&X-Amz-Signature=bcffca7f4dc11b7ae3ce2c3939b90635b26cd503ea09f79d8fe742663f2684a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB63VIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGiGLWuQrYJXEnG9wSgbWUJBEb5fjGqilzgPB3CdHMFwIhAOlMBHTwIFprI4IaYkQB%2FNAxYtGy7GhgjFv2Um8i2Tw1Kv8DCGAQABoMNjM3NDIzMTgzODA1IgwweMOpOO3lxt4ENNYq3AMGcFRz%2FhOmXwIW8lknIVgtNtKIoAFD1I5w62hH5kp%2BuW3wiZc3U3YWZPAKCq%2F86Kk10rBsG7ZoLCSw8Tl2OGqCELmtO7f%2BOeYiWpISg2PCo4Hwl2%2F3kfnoIBxQMge1UZlXkAL5BYHWLP9Td%2FMCff7XovdFVuIn0YX0XPwDTuQYNsAHLrS%2FK2rRjJOnB4x48Ei3MJK03gkjaNRjwDUv%2F295Vzu4Siw73TWGLVGVarTOQCqC2HBj0Lg2f3feOFjsP6It%2F4QDbkC0narI1NKZKX7b8NpuDDdZK3VnWAoRzDtl1dF5siZU97dUCxOaU0OPPco0zSt%2BV6Yzm4Xtx8rxyGsHdynXcZfgh1YL5bS%2BmqtaEVpRLp99Dh8oSrHa69rZ7wBCSdBQfWLiut6CZLolRJSuxijN0ebWV9huCP46iVi16Qnpv8KraYwvtSOUvqlic4YBLTjZP5%2F06O5IaCt%2BLGtuXCc6dhTj8FLcHItulqCZXlaHXSwoLlJVVW3IQhIPk0NHobLLoTnEK%2B3SDV3LPnOEdHfnszSZE1nrT7H3szoZXYnpeKFvnylfbbZc5VadIzkTo0B0d1HCQzG7MdUamRuMfYN2wgg3EIP86%2BwflpJdwG045R4nmODJst6pbjCN7cvJBjqkASePS67FxT2TT9TE3CbuwZERmHmlFcv%2F3n6Yy1zxrCIaI%2FIi7wVfrfX22K5BQkSVeSZv8Q3c20%2FZGdwr6Mle1PY%2BszLXmjKsuEOnZthwhQ5HmV6NyvDCt0p6KO6pUKipqP0w%2FBZ65qA60iMQLRYqm7njafqz22uiaL5TUvZ6GPqXnAg6g9xy%2F8%2BYbOuE8wE36%2B2u6RX6XZ30lJEEhc9un8Q0z%2Baa&X-Amz-Signature=d6b9baa9ae7b48fdc887295d06664b9e69c2021b7797203c88a3c8234b08c143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

