---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDFAKU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeAUkN1ru72jZtGZwyd2xjnV%2Fo2isVVjxrZ02KxmEe3AiEA3YJILfgXbKigAiwAAt9SpmbCkVHVKBxdumUfFg%2F4ErAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdRzeV3Jt7bTduj%2BircAxZ8Eoma2%2BygvybKqkjzk2hALDmTPGq9S2NC7k7fj1u%2FBG1rLpgUykTRmM%2FomA8tpern2p66Xx2PbP2qTJbZwGDvz1ZMldrW%2BJxrX35JNT2Ak%2BwzF5mggB0FtbJuIKhGicWAam9Z60UCdr07E%2FEMSZebJ6h3kqeMW9Tt%2BXbNbNjwiAeP%2F5wR3draerLYmuyQxqInKerHPrQ3PxtGDK4ekGZt%2BAxWV41QkORTIGk3QgovmvQ1WuqyB43Udc5bSE3F%2B95%2FrpkWwCpmYCAlRsRuS0SuQuwoDF0JQQDGP%2Fx9CBUFuF%2FC8RmH40PNtMru%2FSfX2W0jHTtSbmEjhRjwPEx2y8nUTblmtk8eI4bGl0szP9dMhCXnmOvvVhgB34jqF%2BbTdViUoDFEDJwFuhDuz6QkaYLSalSM9lB71b9JH5HM3o%2FvmpRKTf6ApDLEwVndJKHnKoBRt9G504dPIH3XI%2FsUefONKPB%2FN96Meej3W05m0UvdGauMfDxAs0EV2c8W99AREE4T9%2BNiK564EEX76eJ13xAxkAWAawzR01wFQaexPm5tQ8ceO54d5pjxsY4qPjTQ6bV6kkSbfU6az1fdJcKy2S5kvClwEXUm%2Fbw2XpQToP5w%2FvUU6rPOOugUSpBCMLX90skGOqUB2krOB%2F8rLYqo1bpoJy8wCphdG%2FittxQtm8Jj3eb2XkOay%2FSGpXW3Q%2F27qF4x%2BYUU0g7deKUVIzxujxl7OE9iAoP%2Biba7Y5QIzBQp8%2FTXU%2BNxxt4D%2Bzzo17G7X2MQwGkMcpnKJm7Dw1AcZ4BIWPDBvj%2F5HEfhmlxeyQQrUMuU60fYxVUenU9pkNFPzPUIhMArmO%2BmY6JXuIwyLxCXJYJLL0oXst%2Fz&X-Amz-Signature=dab88bbaefb09de873118d1be903ff876b1e72e250a79984afa7511ab21c666e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDFAKU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeAUkN1ru72jZtGZwyd2xjnV%2Fo2isVVjxrZ02KxmEe3AiEA3YJILfgXbKigAiwAAt9SpmbCkVHVKBxdumUfFg%2F4ErAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdRzeV3Jt7bTduj%2BircAxZ8Eoma2%2BygvybKqkjzk2hALDmTPGq9S2NC7k7fj1u%2FBG1rLpgUykTRmM%2FomA8tpern2p66Xx2PbP2qTJbZwGDvz1ZMldrW%2BJxrX35JNT2Ak%2BwzF5mggB0FtbJuIKhGicWAam9Z60UCdr07E%2FEMSZebJ6h3kqeMW9Tt%2BXbNbNjwiAeP%2F5wR3draerLYmuyQxqInKerHPrQ3PxtGDK4ekGZt%2BAxWV41QkORTIGk3QgovmvQ1WuqyB43Udc5bSE3F%2B95%2FrpkWwCpmYCAlRsRuS0SuQuwoDF0JQQDGP%2Fx9CBUFuF%2FC8RmH40PNtMru%2FSfX2W0jHTtSbmEjhRjwPEx2y8nUTblmtk8eI4bGl0szP9dMhCXnmOvvVhgB34jqF%2BbTdViUoDFEDJwFuhDuz6QkaYLSalSM9lB71b9JH5HM3o%2FvmpRKTf6ApDLEwVndJKHnKoBRt9G504dPIH3XI%2FsUefONKPB%2FN96Meej3W05m0UvdGauMfDxAs0EV2c8W99AREE4T9%2BNiK564EEX76eJ13xAxkAWAawzR01wFQaexPm5tQ8ceO54d5pjxsY4qPjTQ6bV6kkSbfU6az1fdJcKy2S5kvClwEXUm%2Fbw2XpQToP5w%2FvUU6rPOOugUSpBCMLX90skGOqUB2krOB%2F8rLYqo1bpoJy8wCphdG%2FittxQtm8Jj3eb2XkOay%2FSGpXW3Q%2F27qF4x%2BYUU0g7deKUVIzxujxl7OE9iAoP%2Biba7Y5QIzBQp8%2FTXU%2BNxxt4D%2Bzzo17G7X2MQwGkMcpnKJm7Dw1AcZ4BIWPDBvj%2F5HEfhmlxeyQQrUMuU60fYxVUenU9pkNFPzPUIhMArmO%2BmY6JXuIwyLxCXJYJLL0oXst%2Fz&X-Amz-Signature=573815f425b40371541ca504fcf3cfa1dbb209f9b6cea84379856d266161aad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

