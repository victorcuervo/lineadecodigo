---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RY6TBV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJs1ijYvuzqBCc8A6aGn4cEB2BlIuJtKoyqfOfU79wOAiBq4j3xu8HZgF3TPk5S4e0sTD%2B%2BB4aCfQ1u2JsflbmJMiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BkZaOCgAz5%2BZdTDKtwDaOogVoJ7rkY%2B6E7RPsFrRYFKYd9Bu%2FvBftwMstEhqQVFP4I32rOuee7r%2BFnLd2H2YRgZMdqNAHxio%2BnrtrhtJ8qP0PeelTr3kcPixN74Y6UwhgRJXW6k2bj4eJYy3lrP5lhta905LnOI7o3uHavr%2FRDvucMl47irDh69QPwPWYEVnSSEaiLr0CD%2F8XVUJsy1QNdVua8S21ZAF57L%2BC6SoAW3%2FMofBU3ruZQu2rJyjzjushA9sFuOT01rks%2BxngwfkS3tn6vpfSdGci8gDxQ%2FoD5V3RxMxcm%2Fw%2F1Tm%2FQtb%2BVUkC%2B%2B3wLbYGCE0z%2FXqh9B1l17kD1u0Mbwivk32HNuTl86pCf1l3O2ZsrwVFiPXwnHy7FUJtfCfWmNyIHaBMayv6MRW4G%2FXpCnceNLRFslFsKUGAtUEQ0bbHMNk7DatJqFy6%2FipDGNIllI70Zs4T9Ffv0zEzuUgn22OgGiYtojap0tUpm1CEiJGQRhPsqt1JSC%2BnmzvLbbL1%2Fc2fJ%2BmLE%2BLeFqoYzv%2FNdQUaUlXIM8V3gYpeSaaaerk3KV4pjV3b3OKhowhSQGcHPjK0hoZR0jb4c5DtkHRIC%2FCxCeDjkZzmLu6kzCTITbWehPYIVzwJnKsyLCn8NfGOXFa5Awqp3UyQY6pgEc8awt4pCBFmvFA%2BPk%2FWy4aDgEUj7KPbJvTOF7RFb%2B%2FVm6ZDNFj%2B88azAXIHPsACSxU7ohkX9Od2sIkt9HJSN0XyhIP27AQICV%2F%2FamLhHfbu%2B8wBkCkZKtQ5Z%2F8ateJXv6OkntrjqP9MNPLp0DF%2BKM9UyxCEf9tuW7GNoB7%2FZsrRe%2BaxFNZgjDZkS4HEm4VLR4ry9W8SzD%2BYzvp%2BmKvi9%2FCZcMsMiv&X-Amz-Signature=d417e08342d279f3bbf32a2167c544ead653a152518ac43b1fc6af462b399251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RY6TBV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJs1ijYvuzqBCc8A6aGn4cEB2BlIuJtKoyqfOfU79wOAiBq4j3xu8HZgF3TPk5S4e0sTD%2B%2BB4aCfQ1u2JsflbmJMiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BkZaOCgAz5%2BZdTDKtwDaOogVoJ7rkY%2B6E7RPsFrRYFKYd9Bu%2FvBftwMstEhqQVFP4I32rOuee7r%2BFnLd2H2YRgZMdqNAHxio%2BnrtrhtJ8qP0PeelTr3kcPixN74Y6UwhgRJXW6k2bj4eJYy3lrP5lhta905LnOI7o3uHavr%2FRDvucMl47irDh69QPwPWYEVnSSEaiLr0CD%2F8XVUJsy1QNdVua8S21ZAF57L%2BC6SoAW3%2FMofBU3ruZQu2rJyjzjushA9sFuOT01rks%2BxngwfkS3tn6vpfSdGci8gDxQ%2FoD5V3RxMxcm%2Fw%2F1Tm%2FQtb%2BVUkC%2B%2B3wLbYGCE0z%2FXqh9B1l17kD1u0Mbwivk32HNuTl86pCf1l3O2ZsrwVFiPXwnHy7FUJtfCfWmNyIHaBMayv6MRW4G%2FXpCnceNLRFslFsKUGAtUEQ0bbHMNk7DatJqFy6%2FipDGNIllI70Zs4T9Ffv0zEzuUgn22OgGiYtojap0tUpm1CEiJGQRhPsqt1JSC%2BnmzvLbbL1%2Fc2fJ%2BmLE%2BLeFqoYzv%2FNdQUaUlXIM8V3gYpeSaaaerk3KV4pjV3b3OKhowhSQGcHPjK0hoZR0jb4c5DtkHRIC%2FCxCeDjkZzmLu6kzCTITbWehPYIVzwJnKsyLCn8NfGOXFa5Awqp3UyQY6pgEc8awt4pCBFmvFA%2BPk%2FWy4aDgEUj7KPbJvTOF7RFb%2B%2FVm6ZDNFj%2B88azAXIHPsACSxU7ohkX9Od2sIkt9HJSN0XyhIP27AQICV%2F%2FamLhHfbu%2B8wBkCkZKtQ5Z%2F8ateJXv6OkntrjqP9MNPLp0DF%2BKM9UyxCEf9tuW7GNoB7%2FZsrRe%2BaxFNZgjDZkS4HEm4VLR4ry9W8SzD%2BYzvp%2BmKvi9%2FCZcMsMiv&X-Amz-Signature=c91c150af13edbd88d425c2f746dc5f396ca254ab8293b62e8a82a2f0f007718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

