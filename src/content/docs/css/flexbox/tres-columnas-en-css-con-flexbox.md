---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYDB3ZF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDmy5jJrgNWchsMiPeO8wXrQ%2Bk5h54fIble1SCvS%2BjdfwIgAmY%2B83h2h%2BAkqVORZRcBn%2BdUc6%2BATF9JkgeWSJubcDoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGhZGPcBPAcGkRmsZSrcA12DvllJG%2FnpnlsYQDkheUYOFPE5rxFjmz3ujotoQaVbSlelJPHsWG4QXITtuEVFCTi27J0PH548YoKdFtAg4nfoH95nhNdXTCNd8AgwyzeNE9nzKQBeOLXWLH1zUBCJIZq7jyOBmslFqV2BnHk8Eyp6SQWnIA6MCv39WJ9N1NNxKElJcXp9NCzwbdpE5uwHYJtkkD7Q177iheiamI1vD8ntnYR4CuRw4Ar4PLzUjKrok3SceSUG2PIyNj5PBE7l0sWiVWtnPw9KTcAdXyu8Pp2Ae2L2M9GrrTUcFNw4%2BvC92Hc9RqojiNVUeLNYzNANUCQfZoI3ezWoFmFGunEBJnO0NSmpSesX6UcrnxwqPhNX2tUEsxjSgH4oq9rfYNlsGXdOfqIfIqgzbxdd6FtKodVKGNfOVEdmMy1pjoFBU1OICTCEnA4koZsUVKS%2FROeUXtvjHluL4tCFvNolkVXA8dEKhdDFB2C6mcCBUYHZufy3ELugis0n9KnOgqzRby9VWtJjRFFYHZDMvAtQZsCUlZaAeH5evM0TT7F9rjLmS7BxLwhIx8iqWz%2FXySB8c1yUbat45J2coPWyeRuYZ4SUHp%2BwTagoSSWdCvqpK9lFYtHiGTE4RipAg7n9C9lGMJPJxckGOqUBbcQmck8CCAfN6UgVZFIZQzeZUZkw6Jw90U%2FgcYfKpNTm0ECCleIf6300yrkb5gLuDoCcKCJxDIsuVK%2Bxxrpe1y2ryZIDZN1w6yWMMiD0VwzcipAZimHAbNjSCmXFivsE%2FXx5OmmBKxcvoPyaf62LGAAuyCQHsUMXurykGTwUshhjYdP0Cjcbd1LuF0k6CDzCvi6nVxkwso%2FU0zI0M6nnW8zhiW%2Fp&X-Amz-Signature=51740e947da04d2df7906a339ad4b79c9d9f3ef2691992a476140ccd1068ebde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYDB3ZF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDmy5jJrgNWchsMiPeO8wXrQ%2Bk5h54fIble1SCvS%2BjdfwIgAmY%2B83h2h%2BAkqVORZRcBn%2BdUc6%2BATF9JkgeWSJubcDoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGhZGPcBPAcGkRmsZSrcA12DvllJG%2FnpnlsYQDkheUYOFPE5rxFjmz3ujotoQaVbSlelJPHsWG4QXITtuEVFCTi27J0PH548YoKdFtAg4nfoH95nhNdXTCNd8AgwyzeNE9nzKQBeOLXWLH1zUBCJIZq7jyOBmslFqV2BnHk8Eyp6SQWnIA6MCv39WJ9N1NNxKElJcXp9NCzwbdpE5uwHYJtkkD7Q177iheiamI1vD8ntnYR4CuRw4Ar4PLzUjKrok3SceSUG2PIyNj5PBE7l0sWiVWtnPw9KTcAdXyu8Pp2Ae2L2M9GrrTUcFNw4%2BvC92Hc9RqojiNVUeLNYzNANUCQfZoI3ezWoFmFGunEBJnO0NSmpSesX6UcrnxwqPhNX2tUEsxjSgH4oq9rfYNlsGXdOfqIfIqgzbxdd6FtKodVKGNfOVEdmMy1pjoFBU1OICTCEnA4koZsUVKS%2FROeUXtvjHluL4tCFvNolkVXA8dEKhdDFB2C6mcCBUYHZufy3ELugis0n9KnOgqzRby9VWtJjRFFYHZDMvAtQZsCUlZaAeH5evM0TT7F9rjLmS7BxLwhIx8iqWz%2FXySB8c1yUbat45J2coPWyeRuYZ4SUHp%2BwTagoSSWdCvqpK9lFYtHiGTE4RipAg7n9C9lGMJPJxckGOqUBbcQmck8CCAfN6UgVZFIZQzeZUZkw6Jw90U%2FgcYfKpNTm0ECCleIf6300yrkb5gLuDoCcKCJxDIsuVK%2Bxxrpe1y2ryZIDZN1w6yWMMiD0VwzcipAZimHAbNjSCmXFivsE%2FXx5OmmBKxcvoPyaf62LGAAuyCQHsUMXurykGTwUshhjYdP0Cjcbd1LuF0k6CDzCvi6nVxkwso%2FU0zI0M6nnW8zhiW%2Fp&X-Amz-Signature=682cfa027a197ac5764671485726ccfd7bf245f478fbaca95ef52263546a9d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

