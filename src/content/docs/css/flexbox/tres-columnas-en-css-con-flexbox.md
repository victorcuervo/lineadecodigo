---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXQK73Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmmKrTLoDdQs%2FP3l9oR%2BrxgrMQncZxMbUqCebXl3QqPAiEAorWDPewfVgrCr0GBfRvEDy0dLB8Q21uY9nD5IgarIaIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmhfYbCL6%2FDbqlhECrcAw5xabTgMuRg6XU9YgYcCVkSPNRkevQLScaxo7CMv%2FNB6OO4P2X0Gah7XAY9dPHsUhPYfFQVcJLgJara5z1C6mtomgj0xNewZDVe2MUIiNYyjeJm2M4tTG%2FZrcpHPmlgWIU46Q2oZ3%2BQEA%2FJX2BLwzSWYXKBFvVyeIzBMyInQ5X%2BhUcdZVyVx1GwEcPkqncJ8fIwZ55OcKoWMERf48tEQWOA%2Fne3FkOxCcq6ZLisabWGmebpMa7tcv0k66QRqcnp4Md9IklsbvnNNDsETHqw5sT789sEopLpfdNb%2B3AWVNE44V1z2YWaTQK3YNmhN1HEQL5nfDLBoz1O1P5lGwaqy3qmoFlyVgWwH0EA%2BdwIXvYq%2Ftv7FlAB587mulOWpufsyDNwpRcSdAwgv7y%2FMeuPhgCF1Z48LWIXmxfPGsJp2z0uHTGXZ1AwaA3HCmoPop%2B3I%2BM7zMausX5b%2BzlmWv7u6R%2BVLKvz7yJ6GvvWCC5qZkZOPOT6Ow4xyy2%2BL9d8FuInFQRUeBjA9JI1ompJzxvmsfybUs%2FvEkdOIDwy2a1IeVN4yN3mY1Q5LRwlQG%2FKIITfeSpPYQW5zthMYL0xGi24yap37hZPLFAu0Oqv2L4XUnWzAjw76OM%2FQHVlqrJ%2FMJrv2MkGOqUBCitgbdGOfcX7byAOR3xyqpyl9dsTTbpQGnR7mw5fZEGRkWxXA8kzfvnggFcEKO7pd4W%2FHBXUGLDY%2B%2BP51vCt%2BbcCQHAaC6BnzC3ap6AoUth6JcyQQUnr9Q2GA1G9Z%2F3HBvOUALVqfCCprDYuyrARDKBw7kp2%2BbU1H%2FiMZdM2iu%2B3KX163qPG84zBHIgG3uUKdk2yfxBI5KPv7ub27P7zj9HuodbF&X-Amz-Signature=fe3bd67717e1179cc25f5e976c5e9aabdb71455490c59c5d9dfc2f7bfae33780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXQK73Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmmKrTLoDdQs%2FP3l9oR%2BrxgrMQncZxMbUqCebXl3QqPAiEAorWDPewfVgrCr0GBfRvEDy0dLB8Q21uY9nD5IgarIaIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmhfYbCL6%2FDbqlhECrcAw5xabTgMuRg6XU9YgYcCVkSPNRkevQLScaxo7CMv%2FNB6OO4P2X0Gah7XAY9dPHsUhPYfFQVcJLgJara5z1C6mtomgj0xNewZDVe2MUIiNYyjeJm2M4tTG%2FZrcpHPmlgWIU46Q2oZ3%2BQEA%2FJX2BLwzSWYXKBFvVyeIzBMyInQ5X%2BhUcdZVyVx1GwEcPkqncJ8fIwZ55OcKoWMERf48tEQWOA%2Fne3FkOxCcq6ZLisabWGmebpMa7tcv0k66QRqcnp4Md9IklsbvnNNDsETHqw5sT789sEopLpfdNb%2B3AWVNE44V1z2YWaTQK3YNmhN1HEQL5nfDLBoz1O1P5lGwaqy3qmoFlyVgWwH0EA%2BdwIXvYq%2Ftv7FlAB587mulOWpufsyDNwpRcSdAwgv7y%2FMeuPhgCF1Z48LWIXmxfPGsJp2z0uHTGXZ1AwaA3HCmoPop%2B3I%2BM7zMausX5b%2BzlmWv7u6R%2BVLKvz7yJ6GvvWCC5qZkZOPOT6Ow4xyy2%2BL9d8FuInFQRUeBjA9JI1ompJzxvmsfybUs%2FvEkdOIDwy2a1IeVN4yN3mY1Q5LRwlQG%2FKIITfeSpPYQW5zthMYL0xGi24yap37hZPLFAu0Oqv2L4XUnWzAjw76OM%2FQHVlqrJ%2FMJrv2MkGOqUBCitgbdGOfcX7byAOR3xyqpyl9dsTTbpQGnR7mw5fZEGRkWxXA8kzfvnggFcEKO7pd4W%2FHBXUGLDY%2B%2BP51vCt%2BbcCQHAaC6BnzC3ap6AoUth6JcyQQUnr9Q2GA1G9Z%2F3HBvOUALVqfCCprDYuyrARDKBw7kp2%2BbU1H%2FiMZdM2iu%2B3KX163qPG84zBHIgG3uUKdk2yfxBI5KPv7ub27P7zj9HuodbF&X-Amz-Signature=af6639c0e2c0629c4a9a6997f0d1f715b507750c7e963f0ed831d2acc66d45b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

