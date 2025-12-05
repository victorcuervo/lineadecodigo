---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYYUOJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsJxUgfC4hpD%2F1%2B%2FksUSWVM2Z%2FnpNbkffAX63cC4GkAiEA7FHl1n45v%2FQTCLS7JbwPEuJwXPMkvMP2SktEcm5gNrEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAf0b2wwAftLhxMolyrcAyD0VQ%2FAAS20kU5cBnICxso6agCylBlvSx4wSIBGOO4%2BrjF0lwTe1r2qI2sw6cJeYVjQCHtOPMdTfRz1LQHw8ZbPTLY9z9WGrKE8tIV71gyZy%2F4OvpGvID89PU0vdLRzj4I475II1J0JWUG9cfI%2FU1fvcYkLK%2FD7k4b%2F7BMsYsSyrLIDxnNStAUslows9argg0f7XSSE8LB%2Fh4qMtMaVXqgeuc47fOn%2BTWzSH4j5yk2v6C6J2sQsXgyVoQc83g4mCRD4gET2IIZW%2B%2F1ehET2VLcxauqYEXL%2BKV2ZV54BHSKHIx30HqxPosD%2BgRH4C%2BCSgw%2Fc1uJyFPYeieR2suMATVXPYHjWcbzNRZ2%2BkFvRPJCR0EmvzFLv1nf1r0OL7DckAXEGblF4Z9yQuD9br7uUvxdsNcW77M1XwSlz52EsNvn%2FyDQSXAssIfFQ4Xt14bJI82F%2FwzPtHeQvhPaseW2n5uIQ0z19MOEKy5VTMCaE9HRZpaPQg7heTbaFTzBwQ2OZBP3n3GYBQuh%2BRjtC4JjXIrFlUc8AA3BDm03CdShqvXCKzjjtINjuXQzqrwpNdX7oAArS8P7hyXWslv0HThaijo3iNN1QJ4qJhw0qCEVf%2FBjfONCsSlw3qXzyq4h5MNqryckGOqUBq3IS%2BKrZQ3j1DtrRjd7%2B6oKexcCEgVJ9JBcX5ln9kFmppB9news50kfaO4fwnkWxqnLShMFiq2wSHg9PtKqwfFN0%2BjwNO8NJ60PbnqwoOSuVx1o9rvEDsKHrrSQ%2BaW00aEsc%2FxCVyp6UJmS0OZV1ROr2mEEcJ1EqHvvprX6X87RQ%2BTkLBjN4rrZL7P%2FYklW%2BpPr4WsCjeChsVpPdcOy5slha82fo&X-Amz-Signature=09136ef1cd31d988c0969b65ac5c381b3866815957ed880da77540e93ebb7455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYYUOJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsJxUgfC4hpD%2F1%2B%2FksUSWVM2Z%2FnpNbkffAX63cC4GkAiEA7FHl1n45v%2FQTCLS7JbwPEuJwXPMkvMP2SktEcm5gNrEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAf0b2wwAftLhxMolyrcAyD0VQ%2FAAS20kU5cBnICxso6agCylBlvSx4wSIBGOO4%2BrjF0lwTe1r2qI2sw6cJeYVjQCHtOPMdTfRz1LQHw8ZbPTLY9z9WGrKE8tIV71gyZy%2F4OvpGvID89PU0vdLRzj4I475II1J0JWUG9cfI%2FU1fvcYkLK%2FD7k4b%2F7BMsYsSyrLIDxnNStAUslows9argg0f7XSSE8LB%2Fh4qMtMaVXqgeuc47fOn%2BTWzSH4j5yk2v6C6J2sQsXgyVoQc83g4mCRD4gET2IIZW%2B%2F1ehET2VLcxauqYEXL%2BKV2ZV54BHSKHIx30HqxPosD%2BgRH4C%2BCSgw%2Fc1uJyFPYeieR2suMATVXPYHjWcbzNRZ2%2BkFvRPJCR0EmvzFLv1nf1r0OL7DckAXEGblF4Z9yQuD9br7uUvxdsNcW77M1XwSlz52EsNvn%2FyDQSXAssIfFQ4Xt14bJI82F%2FwzPtHeQvhPaseW2n5uIQ0z19MOEKy5VTMCaE9HRZpaPQg7heTbaFTzBwQ2OZBP3n3GYBQuh%2BRjtC4JjXIrFlUc8AA3BDm03CdShqvXCKzjjtINjuXQzqrwpNdX7oAArS8P7hyXWslv0HThaijo3iNN1QJ4qJhw0qCEVf%2FBjfONCsSlw3qXzyq4h5MNqryckGOqUBq3IS%2BKrZQ3j1DtrRjd7%2B6oKexcCEgVJ9JBcX5ln9kFmppB9news50kfaO4fwnkWxqnLShMFiq2wSHg9PtKqwfFN0%2BjwNO8NJ60PbnqwoOSuVx1o9rvEDsKHrrSQ%2BaW00aEsc%2FxCVyp6UJmS0OZV1ROr2mEEcJ1EqHvvprX6X87RQ%2BTkLBjN4rrZL7P%2FYklW%2BpPr4WsCjeChsVpPdcOy5slha82fo&X-Amz-Signature=3a50711f8424093dc2ee9da114557b04f1014db5458b17dfabf78500ca60f5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

