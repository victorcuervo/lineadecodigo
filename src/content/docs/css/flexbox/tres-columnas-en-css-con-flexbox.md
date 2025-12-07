---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUXCS7S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWT%2B2EItr6LAx8vHK9PJXLP2JXImbY1FBzRnHzEzA2IwIgPe3gOzge0fmnpw80aDofjXVHOjkjbmiPy%2FyKW0LmepcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9SULocPaC3DoMrhyrcAyMSmhuKhfHIx4cPLvzFZLCTw5mBBAk9Rr6eU85CyUtvY0AUXgoxsMY3jbKyya0RZoiR1g1jlpfzp73J2H95QYx0%2FiK2SwYWWu5%2FXtbaV8g8nrEaDERfeRhk17YwDFKQKOI7VECBo8ROQgGs4tdkcqkHur9KOZ24f8W72iJJAHzkGGn747pP8xO9Iu%2BeYgzN%2FwNzXb8ETp5PPSWx2lDOSg3yUW38VWhskcpypueM%2BynNdSfRYOc8SZzehv2%2FqiDef564hUpu91GqFxAV2GQwmmluri0XX4%2FnVJ%2BHGPRV486rjDs8gP3jVK39zRe2lnCO0VuCWkkNILz%2BZ%2FH515oIxT%2FnqBsEDNEMykFDrO2bGSXNY3l1GVdbpm2b%2B3UrjDCAZUYq%2FYMWX4uUiiNZEejCfD%2FuwpP3rrXCE8xgzX5nmkqKAKKKmMpVIkFtlmRw5xl3SHs8EnnS9pbAPpBVzDXKiYxMwN%2BHpQC%2F5Ln7Du1oS6%2BNVPnmxhHoIciPytAgetcZPwE%2BeVCnt66U2Oa5n81UeCLXUSPI8OGJty9ZEAe%2Fne0iu%2BNVF7sNmnaCNBBeAqORy73SKvkiV5WUIFkKLhxZdYGDYXduP9wTr6fXnWPkbHwu82dRZ%2BYzcdZNDFM2MOrH18kGOqUBBgp%2FHdnSzdetUkNIT3q9LLwR4MCunLnkDaBWk8kkjIJGYNEwby28yseDDo1HH3bJQKzqSj5b%2FXLmPucASSpaTod%2BXQ5u84KxtLQdh52y9Ee6IvKGZa25jXYAI%2Fwpbkt8ARz9nfNTWZlHv4UYYbBTMhr5JR5NEGm%2Bdf7PealgdCM9%2BUeDnnIyNnp4uECnKV3wkjQTKT%2BINlaPUTkTKGsNsTXO3em7&X-Amz-Signature=1e0991a1931e946298094160dc2c11a60798d419e491a6e664f03621a4a851ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUXCS7S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWT%2B2EItr6LAx8vHK9PJXLP2JXImbY1FBzRnHzEzA2IwIgPe3gOzge0fmnpw80aDofjXVHOjkjbmiPy%2FyKW0LmepcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9SULocPaC3DoMrhyrcAyMSmhuKhfHIx4cPLvzFZLCTw5mBBAk9Rr6eU85CyUtvY0AUXgoxsMY3jbKyya0RZoiR1g1jlpfzp73J2H95QYx0%2FiK2SwYWWu5%2FXtbaV8g8nrEaDERfeRhk17YwDFKQKOI7VECBo8ROQgGs4tdkcqkHur9KOZ24f8W72iJJAHzkGGn747pP8xO9Iu%2BeYgzN%2FwNzXb8ETp5PPSWx2lDOSg3yUW38VWhskcpypueM%2BynNdSfRYOc8SZzehv2%2FqiDef564hUpu91GqFxAV2GQwmmluri0XX4%2FnVJ%2BHGPRV486rjDs8gP3jVK39zRe2lnCO0VuCWkkNILz%2BZ%2FH515oIxT%2FnqBsEDNEMykFDrO2bGSXNY3l1GVdbpm2b%2B3UrjDCAZUYq%2FYMWX4uUiiNZEejCfD%2FuwpP3rrXCE8xgzX5nmkqKAKKKmMpVIkFtlmRw5xl3SHs8EnnS9pbAPpBVzDXKiYxMwN%2BHpQC%2F5Ln7Du1oS6%2BNVPnmxhHoIciPytAgetcZPwE%2BeVCnt66U2Oa5n81UeCLXUSPI8OGJty9ZEAe%2Fne0iu%2BNVF7sNmnaCNBBeAqORy73SKvkiV5WUIFkKLhxZdYGDYXduP9wTr6fXnWPkbHwu82dRZ%2BYzcdZNDFM2MOrH18kGOqUBBgp%2FHdnSzdetUkNIT3q9LLwR4MCunLnkDaBWk8kkjIJGYNEwby28yseDDo1HH3bJQKzqSj5b%2FXLmPucASSpaTod%2BXQ5u84KxtLQdh52y9Ee6IvKGZa25jXYAI%2Fwpbkt8ARz9nfNTWZlHv4UYYbBTMhr5JR5NEGm%2Bdf7PealgdCM9%2BUeDnnIyNnp4uECnKV3wkjQTKT%2BINlaPUTkTKGsNsTXO3em7&X-Amz-Signature=e7a53ac68ebc7c9fde8144df1fe43fb661e27874dc3d0f6adacaedbf1f0484ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

