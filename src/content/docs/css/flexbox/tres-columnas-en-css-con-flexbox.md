---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4BIKM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9V7Sw%2Fa47TK0UkbVd9BFNp9MV93a39VCX0A2HsmDYIQIgEkMcMBURHUpUjz1y%2BphLeF4rUdYxkiT%2FEi2gEPtlCjYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE9q55o4v8SGUkfodircA52JQonhfnTG8EU1vrMditqLWcICtzvWjqIRtULlIL22dULxTZ0tuI4rhxrZ6%2BwAMmblyeJvQArVl%2Fu9Iy0qYB2RaZeiM2m6BkQ9asjea%2BS2%2FhM29JHIqpVCCKNwkJ1uRKIMyRZ4jZ%2BWucNP2G56cnyTlQNYY48XQ7yDAoN44YTrecAD0obwMLN0Ltywm%2Fp8l85EPmubnP84RBDah%2FP8UjQ3Zof293nYYZro5pP%2FKkwmhR7lnGx9UK%2B5eWWzq6SzeQa8j%2BpWzKIviuN16x9dus2nLltiwCfwnCywx9E5BpVmze52KvS%2FS783q8Olwuj1RzJHl7Mw3aQ69QlGH1V%2B3sj195IzNtdzyD10Aa6x%2B%2BN2dIhQ6%2BmdSkTFi5S7mGI2wpsjLtiUPXw8hMqJq6tWHRLRLGrx3yzoQ%2BnXVAPBda8fYrt2YdIZLVb0YEdxedJFfdpwQ8dHH5%2FKLn0jFp0YvV%2FtGiZkvhaWphTd34X9Y36ixUAT%2FIqMPosqqEsckwfY3VYxa4aqTiqlauuNDbhH1yNYpCR1UZgt8hr19Xxc8e3qtxVEUqwJwSmTjlhEbGJUJtquyOrXu%2Bm%2Fvd%2BNWUBauawmYeUZyP%2F9J6ActNbcnPAQFaPOJUvIog0gVpxpMNLAyskGOqUBpKC0HwqA8pZJAt3IRN4r2WJ7yJijFtOxspbQlbQC%2B%2FBdH2ffWugX2vw5yJGfr2veVZUJh8uI3Ew9V2BAFy0OWLRjEgFdGLPXdRULk7p7Hcjnz4mKO2ZM7CaSoyqF4JCyN4AwFJSDHSiE38BsaW46Gac%2Bnd5rzb0LAz5EfKVY5tBLAYVqKqykrMlbiXhCe%2BZ%2BIwOg23EKL4FufC0DKy408I7bgbd0&X-Amz-Signature=3de2bcc38dad0e1b95027b2ad841b34473fd6b31e4b4645346575010e807b1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4BIKM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9V7Sw%2Fa47TK0UkbVd9BFNp9MV93a39VCX0A2HsmDYIQIgEkMcMBURHUpUjz1y%2BphLeF4rUdYxkiT%2FEi2gEPtlCjYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE9q55o4v8SGUkfodircA52JQonhfnTG8EU1vrMditqLWcICtzvWjqIRtULlIL22dULxTZ0tuI4rhxrZ6%2BwAMmblyeJvQArVl%2Fu9Iy0qYB2RaZeiM2m6BkQ9asjea%2BS2%2FhM29JHIqpVCCKNwkJ1uRKIMyRZ4jZ%2BWucNP2G56cnyTlQNYY48XQ7yDAoN44YTrecAD0obwMLN0Ltywm%2Fp8l85EPmubnP84RBDah%2FP8UjQ3Zof293nYYZro5pP%2FKkwmhR7lnGx9UK%2B5eWWzq6SzeQa8j%2BpWzKIviuN16x9dus2nLltiwCfwnCywx9E5BpVmze52KvS%2FS783q8Olwuj1RzJHl7Mw3aQ69QlGH1V%2B3sj195IzNtdzyD10Aa6x%2B%2BN2dIhQ6%2BmdSkTFi5S7mGI2wpsjLtiUPXw8hMqJq6tWHRLRLGrx3yzoQ%2BnXVAPBda8fYrt2YdIZLVb0YEdxedJFfdpwQ8dHH5%2FKLn0jFp0YvV%2FtGiZkvhaWphTd34X9Y36ixUAT%2FIqMPosqqEsckwfY3VYxa4aqTiqlauuNDbhH1yNYpCR1UZgt8hr19Xxc8e3qtxVEUqwJwSmTjlhEbGJUJtquyOrXu%2Bm%2Fvd%2BNWUBauawmYeUZyP%2F9J6ActNbcnPAQFaPOJUvIog0gVpxpMNLAyskGOqUBpKC0HwqA8pZJAt3IRN4r2WJ7yJijFtOxspbQlbQC%2B%2FBdH2ffWugX2vw5yJGfr2veVZUJh8uI3Ew9V2BAFy0OWLRjEgFdGLPXdRULk7p7Hcjnz4mKO2ZM7CaSoyqF4JCyN4AwFJSDHSiE38BsaW46Gac%2Bnd5rzb0LAz5EfKVY5tBLAYVqKqykrMlbiXhCe%2BZ%2BIwOg23EKL4FufC0DKy408I7bgbd0&X-Amz-Signature=3124096bb0a2b0c574f5627d48f87809ea3dd15f556f30f53ec2960563efd0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

