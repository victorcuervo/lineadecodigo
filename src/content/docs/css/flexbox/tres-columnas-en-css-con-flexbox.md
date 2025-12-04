---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2SSSBV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDKFkuisQ%2Ftvi%2FIcVb4vdb7%2Fw%2BzQ3Sc1twSJhRg0MWWQAIhAK%2BkRLruIpw%2FZ%2Fb9ZrnBVewQT%2BRC65aCtHxN1TEUCManKv8DCEYQABoMNjM3NDIzMTgzODA1IgwB8NqokPLxow2BjAIq3AN60BfVM9ZpDQUn72sCE47uRhBM0Y8yODeTKlmTKPxVVF7SbtEERHpuQOGL48wwknidzY2Rzd9pZG5vreULRMf5A095R3juoaPSwvr5aAThuQa5D%2FHNRoYTc41VkQOrAZGZf0IoXSPLaueAzG%2FysX8qeXfk2uOtozNvwy2fR7XQ3%2FdnrSlw1nRzhazcEhwQFqwZvEmM9%2FPBP0vSsEPq6D2G6Mw5rTHGynotz1Mkcm8KkDzUL5Exde0xnDaFhlOZAP9bHmGa4hdIir1cG2vbcCbIqJ0ii3miY2ahdDhELaTSb5FK7LFFOilzmWgkJ1dKN67EveXKmmqiEPEtm0TEb1ySFWpmmKPecy3vUsk1NMhLZud5k4uFMdfLAsK66N6PDpAhWO9bbUjfByNSwc0lp8U0j%2B%2BI94KNponpVF%2FFNsiSqlzf6m6wftYcDAN1yYEMXspYZw7RXRzj7TOSQvx6ff6hpF%2FngAWnAUfL2lG0GElOLxiVaqjiefzNOlprUNx6mjWnRuTWEwYGyl2JzAcY7Ir1pifoktjTl0wwaNUhE80SdePi9yn9o0S1L7UzFWKtJTvHP2AU3H9xoR7579ezMZvh3VclQijnLOjUIp%2BJPAsdq8HCGQMVWGdSyt8KHTCkg8bJBjqkAboaJYfBMjiPkpco0beA%2B8SkKaMAQ%2ByE3TZnHih4EGHnv8vlEr200NwZVqW1W1oJubOqudcADSD3GLDDK7xq40ejBd2dl%2B6R3ItngAwvmZW1I3EcdwoCD2Wuy%2BQsJG805oZ6EBx%2BQdKc%2FOQg6QmOsTgkYNCF5MlKx0u2OMvMWLrsIDmwkKeWCd7AnfsllRLPHwjFpDsIcbtGWiR255LA3KaA8lWx&X-Amz-Signature=5856a1f11effdc0c45dd21c3c2c30117a50e694ed58fb51b64d278330eec342f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2SSSBV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDKFkuisQ%2Ftvi%2FIcVb4vdb7%2Fw%2BzQ3Sc1twSJhRg0MWWQAIhAK%2BkRLruIpw%2FZ%2Fb9ZrnBVewQT%2BRC65aCtHxN1TEUCManKv8DCEYQABoMNjM3NDIzMTgzODA1IgwB8NqokPLxow2BjAIq3AN60BfVM9ZpDQUn72sCE47uRhBM0Y8yODeTKlmTKPxVVF7SbtEERHpuQOGL48wwknidzY2Rzd9pZG5vreULRMf5A095R3juoaPSwvr5aAThuQa5D%2FHNRoYTc41VkQOrAZGZf0IoXSPLaueAzG%2FysX8qeXfk2uOtozNvwy2fR7XQ3%2FdnrSlw1nRzhazcEhwQFqwZvEmM9%2FPBP0vSsEPq6D2G6Mw5rTHGynotz1Mkcm8KkDzUL5Exde0xnDaFhlOZAP9bHmGa4hdIir1cG2vbcCbIqJ0ii3miY2ahdDhELaTSb5FK7LFFOilzmWgkJ1dKN67EveXKmmqiEPEtm0TEb1ySFWpmmKPecy3vUsk1NMhLZud5k4uFMdfLAsK66N6PDpAhWO9bbUjfByNSwc0lp8U0j%2B%2BI94KNponpVF%2FFNsiSqlzf6m6wftYcDAN1yYEMXspYZw7RXRzj7TOSQvx6ff6hpF%2FngAWnAUfL2lG0GElOLxiVaqjiefzNOlprUNx6mjWnRuTWEwYGyl2JzAcY7Ir1pifoktjTl0wwaNUhE80SdePi9yn9o0S1L7UzFWKtJTvHP2AU3H9xoR7579ezMZvh3VclQijnLOjUIp%2BJPAsdq8HCGQMVWGdSyt8KHTCkg8bJBjqkAboaJYfBMjiPkpco0beA%2B8SkKaMAQ%2ByE3TZnHih4EGHnv8vlEr200NwZVqW1W1oJubOqudcADSD3GLDDK7xq40ejBd2dl%2B6R3ItngAwvmZW1I3EcdwoCD2Wuy%2BQsJG805oZ6EBx%2BQdKc%2FOQg6QmOsTgkYNCF5MlKx0u2OMvMWLrsIDmwkKeWCd7AnfsllRLPHwjFpDsIcbtGWiR255LA3KaA8lWx&X-Amz-Signature=fcd5385b6cea9aa3e15e4339e12adc1dfcbcd95eb75e685d345e01c26bbe7979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

