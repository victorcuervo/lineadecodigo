---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3E7VMQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUqO%2BujjyvtWklOoX6j63jLZhcl9YWT7yQsVkX7OzT%2BAIhANYiTRt1S83eGB65fhA6QmN8YLBQbIiVAf0FvpXnLtbwKv8DCFUQABoMNjM3NDIzMTgzODA1IgynttVab0y9%2FtX3H7Eq3AMJqeg5hmteKjVMcdw5mNky9MIwJSTgMZm10LeTTo2NaQcD79CS0pwRlcQHLFCm3KVIrg5lPTBwTb3a9OfLpx%2FZO1M4Nf7rWnjUcH1iz20crw6aP5CTxOs8RIM4Jf4I6VC4B8Aoe8jBzgmP3NLvQkMt9g8Uk%2FmV7%2B6y9U3dgWbEDd94OYdra1FGrTEOQhAtVGQ7FllDECQ%2BjlE42jw%2Bo8vbp6FI5iYEwi%2Fz5GTHnUgSPKv3BR2YZz6MGLkmq9lPMpbeGMW8zPgI2iMVQQ4iYubNjfELXIn5CwvrlRuEN2qEXozVySujMrsuylOIMbHuxqKD8jogzykspcJm%2FN5A24b2TnvFR57Xs3Cfu%2F0hzxaphtD99Tl63y2CMH0kxYpBLwDe4BrouMYh8uBMIxXb%2FeoOkrcQ1moEONbfwAOaAJfsqQPJuYzh%2B3fqZ8Tl8yz2ytCd2P2hHpoL3w5s4Ri2Y200YiPIw0tGJZoXb%2FfFu0AI0TUT%2FdOKvLJXyzivshBfrQD901FwZQJZmtjHAdBo85%2FDAHLazqJukHs9JiHiysIbP7hM3biXS%2Fpn2WwYeUuzmqF9R2BZK6Ymz17ajflm0W5v5EeVmvZ9D9jJUReSvgD3qkY5o4uAP7lYC4J2fzCarMnJBjqkAfJqbZCNns9m8ktn%2Bysq3F1wepG%2Bn0QQBjJkeSGT0Y%2BQyJZyuWS%2FStHU283lO1iL5kV8OM5n4tcBENFeqgV3DHeMfDeL5oiYpsEdKSlqEbYeOPvVIcD5upQI%2FKSMhCj5k4KDr2i8JnAbj9U%2B0XPYKOB2Fe%2FtqfYhocOICdh%2BOjR3S08wRHUwtoESb0%2B%2B1mkbqiRIhf0yIe8kHYdtgsSV%2Fv14CSUB&X-Amz-Signature=ddc418b236dfddc71627f05e72d4bcbda282032c7b831623fd761e540b125876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3E7VMQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUqO%2BujjyvtWklOoX6j63jLZhcl9YWT7yQsVkX7OzT%2BAIhANYiTRt1S83eGB65fhA6QmN8YLBQbIiVAf0FvpXnLtbwKv8DCFUQABoMNjM3NDIzMTgzODA1IgynttVab0y9%2FtX3H7Eq3AMJqeg5hmteKjVMcdw5mNky9MIwJSTgMZm10LeTTo2NaQcD79CS0pwRlcQHLFCm3KVIrg5lPTBwTb3a9OfLpx%2FZO1M4Nf7rWnjUcH1iz20crw6aP5CTxOs8RIM4Jf4I6VC4B8Aoe8jBzgmP3NLvQkMt9g8Uk%2FmV7%2B6y9U3dgWbEDd94OYdra1FGrTEOQhAtVGQ7FllDECQ%2BjlE42jw%2Bo8vbp6FI5iYEwi%2Fz5GTHnUgSPKv3BR2YZz6MGLkmq9lPMpbeGMW8zPgI2iMVQQ4iYubNjfELXIn5CwvrlRuEN2qEXozVySujMrsuylOIMbHuxqKD8jogzykspcJm%2FN5A24b2TnvFR57Xs3Cfu%2F0hzxaphtD99Tl63y2CMH0kxYpBLwDe4BrouMYh8uBMIxXb%2FeoOkrcQ1moEONbfwAOaAJfsqQPJuYzh%2B3fqZ8Tl8yz2ytCd2P2hHpoL3w5s4Ri2Y200YiPIw0tGJZoXb%2FfFu0AI0TUT%2FdOKvLJXyzivshBfrQD901FwZQJZmtjHAdBo85%2FDAHLazqJukHs9JiHiysIbP7hM3biXS%2Fpn2WwYeUuzmqF9R2BZK6Ymz17ajflm0W5v5EeVmvZ9D9jJUReSvgD3qkY5o4uAP7lYC4J2fzCarMnJBjqkAfJqbZCNns9m8ktn%2Bysq3F1wepG%2Bn0QQBjJkeSGT0Y%2BQyJZyuWS%2FStHU283lO1iL5kV8OM5n4tcBENFeqgV3DHeMfDeL5oiYpsEdKSlqEbYeOPvVIcD5upQI%2FKSMhCj5k4KDr2i8JnAbj9U%2B0XPYKOB2Fe%2FtqfYhocOICdh%2BOjR3S08wRHUwtoESb0%2B%2B1mkbqiRIhf0yIe8kHYdtgsSV%2Fv14CSUB&X-Amz-Signature=f562bf000e8527a59f5406b3e0733af85e22827954e0f7d9df8a80e5ae53fb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

