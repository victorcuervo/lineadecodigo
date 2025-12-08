---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMXWX65%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVAkyNqPcMs77AtTK2Pf3YPoNRPBNjJ3gll3kWnfGBgIhAPBnWxHtQmViwbopz01nllT0k3bdPVXZm01VtvRuR3aQKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzILHBvfgHz6tCjtC8q3APOkDtDbAXSQFdF0qCgcb7B59guV%2BTck7CmOlMXmxXOeC3MZe6oQa3imYUnfRIn2z%2BHBtsuRBvrpMDhRHNsWBMR5qvfStFAkb2Ud0dgMp1n4xKK%2Bm07dJv05T6y4Q%2FC2IComDqu%2FHXl8QWY5S2eQCd%2BC%2FQ5NDsC5%2F%2FQuYsq1Md8icS6vb%2FlAKjkWGfhENOiziilcPLc6AdqpKCSTcwcsA9K63E%2BM1nS6P1x7BdVaMWu0dwZkft5tCn1U8Vem0iT4Uf4IJOhb3SQDPcpJNGbc1LWsJqa9MqBdibWgUjSmLqHqcYjsMe7lEUHAs%2B%2FmdrooUjF%2FKNr4tB26tbY82Sd2h%2FLNsQsVI%2Bje7aIzoHJLdtEf7Rfsze53ncMI89ef4gSmY%2FQSPOR6vpL9F3WFHT2IXLcM7xMK1WZIJxjpw%2BlTFy%2B%2FN1jaf8IbQziXzqFZgqxDQVnRC7naEFs0U0xsKATJNs1BWyJOrtmVsb2SLSAeW3sqEmZb5nlnNMRSNOQ0%2BVNxwUkER3i5%2FjHhr24xcoTBtz6EXTScKnivdQWj1u%2FkHmaryvLn9agQWndMKByhzT%2BIKIuhlre2Gksk7Wv8tIi3vAl%2Fb%2FkOJyyoJa2s0rCwTAPfneaGA77jxe0jib6QDC85NvJBjqkAfqANBTW10TzuCSd2V5VxzXd0eosm9mSiwa0fPBgOTfwO5tk9WBFgZlLKPq8JvzGvels3JV2XpoP60UzqFr5C1YjMzzg7DATeofZTa8EoR4p%2Bi2zOcuWNOvr6c4Sa9vVgxC%2FBWmpVZPyf405GHneoSMxD86bzHADUrEgPwOthozayTTNhW9%2BGS12Uu9xgR%2B30XtCNLvNRGW7bAalrt8TrvSsz6D9&X-Amz-Signature=1cca74f182509d28d1f0a03de9f337afce550d6788f699fdfe57c994ca2ca4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMXWX65%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRVAkyNqPcMs77AtTK2Pf3YPoNRPBNjJ3gll3kWnfGBgIhAPBnWxHtQmViwbopz01nllT0k3bdPVXZm01VtvRuR3aQKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzILHBvfgHz6tCjtC8q3APOkDtDbAXSQFdF0qCgcb7B59guV%2BTck7CmOlMXmxXOeC3MZe6oQa3imYUnfRIn2z%2BHBtsuRBvrpMDhRHNsWBMR5qvfStFAkb2Ud0dgMp1n4xKK%2Bm07dJv05T6y4Q%2FC2IComDqu%2FHXl8QWY5S2eQCd%2BC%2FQ5NDsC5%2F%2FQuYsq1Md8icS6vb%2FlAKjkWGfhENOiziilcPLc6AdqpKCSTcwcsA9K63E%2BM1nS6P1x7BdVaMWu0dwZkft5tCn1U8Vem0iT4Uf4IJOhb3SQDPcpJNGbc1LWsJqa9MqBdibWgUjSmLqHqcYjsMe7lEUHAs%2B%2FmdrooUjF%2FKNr4tB26tbY82Sd2h%2FLNsQsVI%2Bje7aIzoHJLdtEf7Rfsze53ncMI89ef4gSmY%2FQSPOR6vpL9F3WFHT2IXLcM7xMK1WZIJxjpw%2BlTFy%2B%2FN1jaf8IbQziXzqFZgqxDQVnRC7naEFs0U0xsKATJNs1BWyJOrtmVsb2SLSAeW3sqEmZb5nlnNMRSNOQ0%2BVNxwUkER3i5%2FjHhr24xcoTBtz6EXTScKnivdQWj1u%2FkHmaryvLn9agQWndMKByhzT%2BIKIuhlre2Gksk7Wv8tIi3vAl%2Fb%2FkOJyyoJa2s0rCwTAPfneaGA77jxe0jib6QDC85NvJBjqkAfqANBTW10TzuCSd2V5VxzXd0eosm9mSiwa0fPBgOTfwO5tk9WBFgZlLKPq8JvzGvels3JV2XpoP60UzqFr5C1YjMzzg7DATeofZTa8EoR4p%2Bi2zOcuWNOvr6c4Sa9vVgxC%2FBWmpVZPyf405GHneoSMxD86bzHADUrEgPwOthozayTTNhW9%2BGS12Uu9xgR%2B30XtCNLvNRGW7bAalrt8TrvSsz6D9&X-Amz-Signature=af4bf294f8e5d08e3354e238c4f8ec44f803f547842cc20a334ca335d63a42ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

