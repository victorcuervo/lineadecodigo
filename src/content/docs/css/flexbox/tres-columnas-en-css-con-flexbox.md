---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWJLRBC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPTNEIAJblmqrm3%2Fj7v920%2F8BjZ0MY58MkwcFPwVQEAIhAI8cTpfGeKKvUD3EC%2BzCf6DaCvvdt8OIdLRYillPyhsBKv8DCHUQABoMNjM3NDIzMTgzODA1IgzN8BcymSRmGZR%2B890q3AN6IuGbg8IUy0Zbu5qib0KGS3c%2FE02BUT%2BN%2Bv6RYgdG4PQiMuNnWo3lcLWTf33yqu0smtkKPRP0PBdNo542lhM76Fw8h4fDaQXChQQGwlvg6tpRTr5ioJWx3W2jFUCmbTlYxuBC%2B%2F2wt8H%2FhC5CAde8AVkhU8Yh8iRZ9KOTClzg8rJzUHnKGqSVAGHxTRzQXT0gUuUsBl7xG3LhnS861AA2VbaajFcFYBAcjLYg874OWpYAmBSp3T7jfiMYpr9eAViEZl9J77fy6T0sfJplmoBcKimJPeqiNJiTMPCCKNGbUQnR%2BYruz8WAEitNoX6rlTzd5hwi7Ec83ZP4hJHGfjzZ88NUGebrOEyvsb9Bd7gCrZ7IcEPKhyBTJwAGVzXq4DfpIPHhlHdTZTZa%2FqrdUWr7KOuU%2ByS15Nu26FbMIF0V2RcfW%2BIMGfJtmZ4rQSIGzfpIfSI6RySvtTR%2Bd9BKUN63yJbJQpMGTxpFQ9C7UKS8V5EEtXJvMN5Pg48EtdLKeJ9eGXetIPKn3qaIi3IdtlxZBawrQEA8rp2WZvskvXIg%2F0SKxqdeBZy6sDlNI9bRlpzTctLWEyTKADjDwXgEOKA%2FZhlntmtZgDr%2F53kJsl8x4Zbe5oJMGVSwDzctGjC8ptDJBjqkAY5U5M26%2FGaiFJArmwzPJFwunMZQ5WtfYVfqGvF6rEZ8Pj8fnvRX9azZ0RX3obZuvVA7wbMyNyn5Bcm3BgJtKrSBWFru1sfygRULfLH94xkP8i2WUNxM9TXgG3ahpdl%2Fzdz1zqDfp9XYYJ6KhXBSaojkS5VNSnlg5f6HzTHr9R5lr%2FaR%2FGJeRH0LF%2FMcQyUFXFrGPTQqglPaWJLonRFFzffYCY%2BO&X-Amz-Signature=da1e739463c10a5e22f69d9830c38fa97f32c13b8b53089e07eca900b134f2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWJLRBC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPTNEIAJblmqrm3%2Fj7v920%2F8BjZ0MY58MkwcFPwVQEAIhAI8cTpfGeKKvUD3EC%2BzCf6DaCvvdt8OIdLRYillPyhsBKv8DCHUQABoMNjM3NDIzMTgzODA1IgzN8BcymSRmGZR%2B890q3AN6IuGbg8IUy0Zbu5qib0KGS3c%2FE02BUT%2BN%2Bv6RYgdG4PQiMuNnWo3lcLWTf33yqu0smtkKPRP0PBdNo542lhM76Fw8h4fDaQXChQQGwlvg6tpRTr5ioJWx3W2jFUCmbTlYxuBC%2B%2F2wt8H%2FhC5CAde8AVkhU8Yh8iRZ9KOTClzg8rJzUHnKGqSVAGHxTRzQXT0gUuUsBl7xG3LhnS861AA2VbaajFcFYBAcjLYg874OWpYAmBSp3T7jfiMYpr9eAViEZl9J77fy6T0sfJplmoBcKimJPeqiNJiTMPCCKNGbUQnR%2BYruz8WAEitNoX6rlTzd5hwi7Ec83ZP4hJHGfjzZ88NUGebrOEyvsb9Bd7gCrZ7IcEPKhyBTJwAGVzXq4DfpIPHhlHdTZTZa%2FqrdUWr7KOuU%2ByS15Nu26FbMIF0V2RcfW%2BIMGfJtmZ4rQSIGzfpIfSI6RySvtTR%2Bd9BKUN63yJbJQpMGTxpFQ9C7UKS8V5EEtXJvMN5Pg48EtdLKeJ9eGXetIPKn3qaIi3IdtlxZBawrQEA8rp2WZvskvXIg%2F0SKxqdeBZy6sDlNI9bRlpzTctLWEyTKADjDwXgEOKA%2FZhlntmtZgDr%2F53kJsl8x4Zbe5oJMGVSwDzctGjC8ptDJBjqkAY5U5M26%2FGaiFJArmwzPJFwunMZQ5WtfYVfqGvF6rEZ8Pj8fnvRX9azZ0RX3obZuvVA7wbMyNyn5Bcm3BgJtKrSBWFru1sfygRULfLH94xkP8i2WUNxM9TXgG3ahpdl%2Fzdz1zqDfp9XYYJ6KhXBSaojkS5VNSnlg5f6HzTHr9R5lr%2FaR%2FGJeRH0LF%2FMcQyUFXFrGPTQqglPaWJLonRFFzffYCY%2BO&X-Amz-Signature=fdf5d6f49efa454f7cf8659dcd890a9b7fa533602b8f7a798091b30b5a21f54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

