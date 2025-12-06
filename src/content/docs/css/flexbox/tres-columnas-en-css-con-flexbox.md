---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSO7KNF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5IZ51WYxruYj2VTxCHXMaqt7KNrb7gNrILBA8q02KSAiEAjODJMIVcXWmQKR%2F9Si9JAuiDHcnEP7jQDuz5kEdtLF8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLLNuH8rvB8ytBdJyrcA9zl5A7vlfy6zZvGnoju%2BsTWBiwfR85Gvr5266AO7X1cKr1fPFO2EMNg%2Bd7u73HS0gUFRzzV%2F7uTqZtkNLH8bOj02CJEFpjuiCm%2BVaQJbqvuMb%2Bu8Lbcb1l2V6oJ0FF1SL3uE13kPAl%2F%2FHtOmN0qw4DR1I8dtvmjJK3kg2Z8AnJMgBhLDDVnkfA1LhWy89ctjhG%2BpQJQ5pseAq3PcQ4jdt56rxzNMznDYhcnZjcDgXyVfriiDlMJzzv39xgWkCaqQYsMNa75WAHxDBh6f5Wq5StJ8O7xAAxic1lhfbjsiLfdbIYHDrz4pNfkctFcPk0nVIroS5CbSBVTrhGFZOc6Jbp4C8fWk%2BmveuiqYfQEh9zjutB1hr9msNmXglQTulHX8NJlrLGTHEW8la19xRIy65efAmhBhkUE2rissFwjxsBQa2MHQKh3h9PBR6kBTnFzMMd3n5rxunA37MJkDZMu9ibChVpHsefAp6k7Lxm4t%2BBb8jzdBTyZDmuRvO%2FUShT5geG4qM0Mso0HCGUbEY7EK830grOEDhPPFxvv0AhFgnx32ZO%2FNHVU%2BFaoq80%2FPXV3AKSx1D7OVJu6Qqo5ddwBKESf%2F9QnbbhsWcKYw2TmPVL8DdUscLWwB7l1B3ObMOjrz8kGOqUBKs7m7OIlgrinvmPcECNls1MIUaKmaGIxveXo57rolnrbuQy0ZVX0ChSH0HeNAV9mvsMlybKC3LeKQNxBH64QNOokQMy1B23Y%2Fx8mR3inDDn3PrcVasDYKiW9dG7dJ98waciJAmLleBVxfwMvv%2BjK2BRIljMwvoe%2BbTx501CFjcSBCZ8bZ0Mjmxq%2BC0lPFB8482vu%2BDGdJGVBbf%2BvwjkMQsZ0Bkkp&X-Amz-Signature=bc7358f2bd7bb9127c6e378638a3f0b7c391d9e882da5472c35faad49fcd302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSO7KNF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5IZ51WYxruYj2VTxCHXMaqt7KNrb7gNrILBA8q02KSAiEAjODJMIVcXWmQKR%2F9Si9JAuiDHcnEP7jQDuz5kEdtLF8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLLNuH8rvB8ytBdJyrcA9zl5A7vlfy6zZvGnoju%2BsTWBiwfR85Gvr5266AO7X1cKr1fPFO2EMNg%2Bd7u73HS0gUFRzzV%2F7uTqZtkNLH8bOj02CJEFpjuiCm%2BVaQJbqvuMb%2Bu8Lbcb1l2V6oJ0FF1SL3uE13kPAl%2F%2FHtOmN0qw4DR1I8dtvmjJK3kg2Z8AnJMgBhLDDVnkfA1LhWy89ctjhG%2BpQJQ5pseAq3PcQ4jdt56rxzNMznDYhcnZjcDgXyVfriiDlMJzzv39xgWkCaqQYsMNa75WAHxDBh6f5Wq5StJ8O7xAAxic1lhfbjsiLfdbIYHDrz4pNfkctFcPk0nVIroS5CbSBVTrhGFZOc6Jbp4C8fWk%2BmveuiqYfQEh9zjutB1hr9msNmXglQTulHX8NJlrLGTHEW8la19xRIy65efAmhBhkUE2rissFwjxsBQa2MHQKh3h9PBR6kBTnFzMMd3n5rxunA37MJkDZMu9ibChVpHsefAp6k7Lxm4t%2BBb8jzdBTyZDmuRvO%2FUShT5geG4qM0Mso0HCGUbEY7EK830grOEDhPPFxvv0AhFgnx32ZO%2FNHVU%2BFaoq80%2FPXV3AKSx1D7OVJu6Qqo5ddwBKESf%2F9QnbbhsWcKYw2TmPVL8DdUscLWwB7l1B3ObMOjrz8kGOqUBKs7m7OIlgrinvmPcECNls1MIUaKmaGIxveXo57rolnrbuQy0ZVX0ChSH0HeNAV9mvsMlybKC3LeKQNxBH64QNOokQMy1B23Y%2Fx8mR3inDDn3PrcVasDYKiW9dG7dJ98waciJAmLleBVxfwMvv%2BjK2BRIljMwvoe%2BbTx501CFjcSBCZ8bZ0Mjmxq%2BC0lPFB8482vu%2BDGdJGVBbf%2BvwjkMQsZ0Bkkp&X-Amz-Signature=5fbb84d177553ffc24d8efe34305e5ce95e29f290b3a355e81830a6ffc0e7178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

