---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3CI5NQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgb7jgiccIT1gqWzAAme8qWHbZBLpL2xL3vMV69opt3gIhAIBFJ0AjgL8ukXJx5XQ2ti5UPbRWLsEfXV30h3H4StRnKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj7WWURTUcNjaBZScq3APtcptz2sLIgMBYaTjKFerUOvNSJX2bPNKruaDG6AIdWceesN7SuFnFyVK1GiXRaMs3BdoR%2FAFjNzqusOfkWrVBWzjDqQcPVh2WLBttePSDe55cexPIEoOA9195RWHBHpcoeFg612%2Bgoe2VUrmotZzwSpB3UW5NMcHPCkl3AsMKz4rWGpa%2FoCokSEASgBtx0%2B7kAbt5M1BNHp0RJvvRaPKjRl1Iy5ZUk0mBybHv6SPybuKsA2rx%2BgJ%2FA5CdUBxh0FVn4n1zDtxREdoQPF%2BIlaSI%2FlATKtrkoXHR1OB790tH4e88%2BblMqXSmUc6AGIfwAWr8edWd8yCO%2FLNZAcnzPrjX2egSJhJUWewAC5ge7bO8hl1PVhSBklclxUusu4OUf%2BfdyUBgECYgNKXfi8xNhd1VgTkkYHAMszRF3WdIXl0lqMRoxh2hpB9S%2B6A%2BiQeWRWOmYcszfw0KIJN7Anc%2BVa5wz8f7iv%2BYYJru3HObXMSMkQbNVFidd97I1iVJ%2BCnMsP8DhvFL1hMVJ2H1%2B6XZlaVqGESp50kY20dc%2BpQNcnofOhX%2Bh6mm8la140kqcTIPRGktv4B%2FzGipLpMFNC4n1c4s0TDDpE5DhpepaPZfwjpOHHVmJ4LoWtR0VCq96DCMw93JBjqkAWxlRQ0HTMSJoW658ydo1YrqTCl7DALeq2lQnjwxVlDWKa2Xm%2ByISs9P4uw6MRxyL5ardkUgOEq73XGB9scyJPsa2hV6dxf%2F6GKk%2Fh8tVeF0C6HUTGAdxs5eSsH5B5VOE18kTXwADisKiLNXVm1eHK31tV2pXKm1rOBnTtRVQ5crBMKsLolqPTTwbdsEfMoEm5a8greQZqK9J2H9meM4DO8C%2BIfv&X-Amz-Signature=b580a39ec6ca7fb34c03d95913a4e789b7a7cea6c19fe1fdc6587832ca9f7013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3CI5NQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgb7jgiccIT1gqWzAAme8qWHbZBLpL2xL3vMV69opt3gIhAIBFJ0AjgL8ukXJx5XQ2ti5UPbRWLsEfXV30h3H4StRnKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj7WWURTUcNjaBZScq3APtcptz2sLIgMBYaTjKFerUOvNSJX2bPNKruaDG6AIdWceesN7SuFnFyVK1GiXRaMs3BdoR%2FAFjNzqusOfkWrVBWzjDqQcPVh2WLBttePSDe55cexPIEoOA9195RWHBHpcoeFg612%2Bgoe2VUrmotZzwSpB3UW5NMcHPCkl3AsMKz4rWGpa%2FoCokSEASgBtx0%2B7kAbt5M1BNHp0RJvvRaPKjRl1Iy5ZUk0mBybHv6SPybuKsA2rx%2BgJ%2FA5CdUBxh0FVn4n1zDtxREdoQPF%2BIlaSI%2FlATKtrkoXHR1OB790tH4e88%2BblMqXSmUc6AGIfwAWr8edWd8yCO%2FLNZAcnzPrjX2egSJhJUWewAC5ge7bO8hl1PVhSBklclxUusu4OUf%2BfdyUBgECYgNKXfi8xNhd1VgTkkYHAMszRF3WdIXl0lqMRoxh2hpB9S%2B6A%2BiQeWRWOmYcszfw0KIJN7Anc%2BVa5wz8f7iv%2BYYJru3HObXMSMkQbNVFidd97I1iVJ%2BCnMsP8DhvFL1hMVJ2H1%2B6XZlaVqGESp50kY20dc%2BpQNcnofOhX%2Bh6mm8la140kqcTIPRGktv4B%2FzGipLpMFNC4n1c4s0TDDpE5DhpepaPZfwjpOHHVmJ4LoWtR0VCq96DCMw93JBjqkAWxlRQ0HTMSJoW658ydo1YrqTCl7DALeq2lQnjwxVlDWKa2Xm%2ByISs9P4uw6MRxyL5ardkUgOEq73XGB9scyJPsa2hV6dxf%2F6GKk%2Fh8tVeF0C6HUTGAdxs5eSsH5B5VOE18kTXwADisKiLNXVm1eHK31tV2pXKm1rOBnTtRVQ5crBMKsLolqPTTwbdsEfMoEm5a8greQZqK9J2H9meM4DO8C%2BIfv&X-Amz-Signature=7ba9698851464f3321e7c8ae22c68bbddd388e255d18687caabafeeed8686328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

