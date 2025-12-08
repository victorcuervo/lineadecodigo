---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDNRDME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9NRv8Ry8hkii%2BsxOOtTfIMpF9mXTUHsV1ipKkrzdKEgIhAJWQRF%2B%2BlDNjmJtjqf2hDFoPVy5jwIeuATJlQjTjb10LKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwozVL7Tc3qKoWMLj0q3ANUifjAn0uXI3o5YSGdA84AZwnsyPFOxjyDQ2e9RAQ68umAow8hASSxqSqF0fftuHcud1YAq2zcP%2FjyOgLcmK9ugZPgd81xMrYGz%2BE1Nh%2FJEcEDeu8XtkILEEQCNX2xmWEveZ592IreFKf4dPnheKVp0OMe8xj%2FHs3cRFju7%2FaSvNw97DxttHa0rQ8Bsc4PZSB289adj6H%2BlYvUe7fDZ%2FxUNVuq4q%2BUHfDDJYoWK6eOxzKbFxfdJg%2FU9Y0j2XwYswwTxgUIjHhhahKWvie48BiEhqd2eG9R4xuHG1OpwWaK2XlflF7MyNxh7EBZhvsugXfT1oXVjRO8J9RYSliCsSGuK96NNSBxVsF%2FtjrkHcQQ2VAINXR6JOo%2BRNSF84MlXLdtMymGI3Lmn%2FCpigl70CoFpXJvi%2FLim6KefESaBqEMlcOO6pA6rezZAjVrLeb%2FaWvosWxBHJVtLWHBG38WAxpS0hO%2FbPr49Bx5XdDOgCCJIO01E1UmC57nV0mXEpnClgh3YcyubdyzBiIEm8Bwi7jc0SHr5fak7QHWDg6yhaeKmdGWIdw%2BPAYAKtXyvQ4AOpvYlvt7UReGEjuyRGyekJ27%2FiaGNrb%2BF5TZiwfMozuurrc5RiKPWdO%2F47JvTTD%2F8trJBjqkAREboo9F5BhEDoIw6DmsLfC9ev6f%2FiRm%2B88SJuNTgPhFVwvL46can71flv06v7NemNMAEOPybuTElz2xKb2dHOthNSJ16DV1IUKiTtT0w8oQSbtf151Ehcuv4oVm4I9qzd7cob1vSy0Zpv%2BwXcG1V4f7Nz9YefPEiLD%2F%2FjDqOtmrsnht4wHFJNhmv6nk1RdU21OPC3pVAKYhPQyZe05dvoq3JT5m&X-Amz-Signature=2f61f8f3f5dbc16b38e6d1b79d09c71f2a6fcc84cd01802f063bbd540a8b4d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDNRDME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9NRv8Ry8hkii%2BsxOOtTfIMpF9mXTUHsV1ipKkrzdKEgIhAJWQRF%2B%2BlDNjmJtjqf2hDFoPVy5jwIeuATJlQjTjb10LKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwozVL7Tc3qKoWMLj0q3ANUifjAn0uXI3o5YSGdA84AZwnsyPFOxjyDQ2e9RAQ68umAow8hASSxqSqF0fftuHcud1YAq2zcP%2FjyOgLcmK9ugZPgd81xMrYGz%2BE1Nh%2FJEcEDeu8XtkILEEQCNX2xmWEveZ592IreFKf4dPnheKVp0OMe8xj%2FHs3cRFju7%2FaSvNw97DxttHa0rQ8Bsc4PZSB289adj6H%2BlYvUe7fDZ%2FxUNVuq4q%2BUHfDDJYoWK6eOxzKbFxfdJg%2FU9Y0j2XwYswwTxgUIjHhhahKWvie48BiEhqd2eG9R4xuHG1OpwWaK2XlflF7MyNxh7EBZhvsugXfT1oXVjRO8J9RYSliCsSGuK96NNSBxVsF%2FtjrkHcQQ2VAINXR6JOo%2BRNSF84MlXLdtMymGI3Lmn%2FCpigl70CoFpXJvi%2FLim6KefESaBqEMlcOO6pA6rezZAjVrLeb%2FaWvosWxBHJVtLWHBG38WAxpS0hO%2FbPr49Bx5XdDOgCCJIO01E1UmC57nV0mXEpnClgh3YcyubdyzBiIEm8Bwi7jc0SHr5fak7QHWDg6yhaeKmdGWIdw%2BPAYAKtXyvQ4AOpvYlvt7UReGEjuyRGyekJ27%2FiaGNrb%2BF5TZiwfMozuurrc5RiKPWdO%2F47JvTTD%2F8trJBjqkAREboo9F5BhEDoIw6DmsLfC9ev6f%2FiRm%2B88SJuNTgPhFVwvL46can71flv06v7NemNMAEOPybuTElz2xKb2dHOthNSJ16DV1IUKiTtT0w8oQSbtf151Ehcuv4oVm4I9qzd7cob1vSy0Zpv%2BwXcG1V4f7Nz9YefPEiLD%2F%2FjDqOtmrsnht4wHFJNhmv6nk1RdU21OPC3pVAKYhPQyZe05dvoq3JT5m&X-Amz-Signature=3034f16a6d6b7fda6bc0c881abc0f3e97d5f18bc171fc01262e8889028aa5425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

