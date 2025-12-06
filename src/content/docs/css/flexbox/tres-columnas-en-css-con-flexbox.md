---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYMH3DG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAWwTR5VCpKSkWoU8vKuYwy2wZO9jjWZ0WqR1BparemQIgIsJxyDDVuFOAVQVFq%2BdlJ%2FG8QjseX0LnUCCJin5Xqagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCfdEWbra2wdcOA8sSrcAznvYgWQzAEe3bihP%2BGk2WgfxdcpOg5RlWsnaAeMbjs7X7tL61XgbYoSHLkTTwfqLoJasj7V7XAnNHGeg86TPHvJAI94hQ8BlRMmhSRKPaInDW7OG3RmO2xxWG%2Fx%2BH7MZN2%2BjrImVQntjLO1S5McEEwn%2BmTomXbuRQh5Gb%2ByiNEcQtEQnnWXb4%2B4Qa%2Bllfm%2Burpnrb9RfppuVikoUBcnPu9PI8F%2FRmSYYlI%2BOB0hjnt9U3jjSAGHX0JFjIpXd4DqQkPT8U2OXqTsZ4quLRbbGxa6kQlRrRvv%2BPJVQf6Zv0sqmlVbaVkD6v2kS6A%2Bp6FSRSwkKPRWRhFcNoGoz2lFh2S%2B4kzCjNc3sQSpEwLDtSjHSHBEJmFE%2FROfCgKR3VhaF5%2BC3bNDSaEvmZ76%2FXGJZdaFirpRTwBUV7vWkiN8fooraMJuIj5wMPCDbCdqf943guktyfYue3APViHR7BY%2BJ19eyqcs4%2B9bvfvBC8PEhBz1Gqfo%2F%2FNKt5WBVYV6wQVQrHoW42vPrYvCQfeFoeFeT4UJhkhiBRrdo4mQds%2B%2BudXfyK31hXTsIc0vjbl4v0nC6%2BsO6Xp9A21dxnYUohqWoldRwjlm19RjgjOHT8zOK3KShu1iSGAzFsN4z7MZMMrCzskGOqUBxrisHzI7ivfz%2FidSLeJoVgiwgwXwYFWXxQpU1oqzMkK2H0WOQN%2Bwxd7TpqA78LmKc6EhtTxvvf4rWphMMhXw76RLGHwMHR6c80qNlzzI7jociE6FSb9wSTZdvbIZoKA6SSXyljO67iM83iBuih%2Fk2cuhMYgNeM%2FRj%2BiQJMRPwVi%2Ft6wIfWclBMMU8MvoSkTBIenTFkX7B1r%2F87yrleFXJgz7FZmI&X-Amz-Signature=d02eb24ed2b28fd633818834199eb769db113152c8b421e8a305402243c5563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYMH3DG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAWwTR5VCpKSkWoU8vKuYwy2wZO9jjWZ0WqR1BparemQIgIsJxyDDVuFOAVQVFq%2BdlJ%2FG8QjseX0LnUCCJin5Xqagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCfdEWbra2wdcOA8sSrcAznvYgWQzAEe3bihP%2BGk2WgfxdcpOg5RlWsnaAeMbjs7X7tL61XgbYoSHLkTTwfqLoJasj7V7XAnNHGeg86TPHvJAI94hQ8BlRMmhSRKPaInDW7OG3RmO2xxWG%2Fx%2BH7MZN2%2BjrImVQntjLO1S5McEEwn%2BmTomXbuRQh5Gb%2ByiNEcQtEQnnWXb4%2B4Qa%2Bllfm%2Burpnrb9RfppuVikoUBcnPu9PI8F%2FRmSYYlI%2BOB0hjnt9U3jjSAGHX0JFjIpXd4DqQkPT8U2OXqTsZ4quLRbbGxa6kQlRrRvv%2BPJVQf6Zv0sqmlVbaVkD6v2kS6A%2Bp6FSRSwkKPRWRhFcNoGoz2lFh2S%2B4kzCjNc3sQSpEwLDtSjHSHBEJmFE%2FROfCgKR3VhaF5%2BC3bNDSaEvmZ76%2FXGJZdaFirpRTwBUV7vWkiN8fooraMJuIj5wMPCDbCdqf943guktyfYue3APViHR7BY%2BJ19eyqcs4%2B9bvfvBC8PEhBz1Gqfo%2F%2FNKt5WBVYV6wQVQrHoW42vPrYvCQfeFoeFeT4UJhkhiBRrdo4mQds%2B%2BudXfyK31hXTsIc0vjbl4v0nC6%2BsO6Xp9A21dxnYUohqWoldRwjlm19RjgjOHT8zOK3KShu1iSGAzFsN4z7MZMMrCzskGOqUBxrisHzI7ivfz%2FidSLeJoVgiwgwXwYFWXxQpU1oqzMkK2H0WOQN%2Bwxd7TpqA78LmKc6EhtTxvvf4rWphMMhXw76RLGHwMHR6c80qNlzzI7jociE6FSb9wSTZdvbIZoKA6SSXyljO67iM83iBuih%2Fk2cuhMYgNeM%2FRj%2BiQJMRPwVi%2Ft6wIfWclBMMU8MvoSkTBIenTFkX7B1r%2F87yrleFXJgz7FZmI&X-Amz-Signature=5abe3e011d959be10db6be04102c34cc1036f463d49bcd6eeb83a9dee2478fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

