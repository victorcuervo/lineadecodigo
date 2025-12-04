---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHTCBYJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDIIdlNrhSJD1AKzrLCZHJx1Dvs5t2NsYydaSZaPvffKAiAOdHh1kgL%2FUHitpWChTURzPCRNQgEOjddAcxPy64j8RCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMvYpjKv2rxIpalT14KtwD21GFEOPqSnBUfSSvTZKX6WXQGpospYa0qakTAdmdD2lg8FcDEVTkXykbjxRehatMJ71z474KKiUJX4YHR24Z4R3FkLAnDqcy10rFYf%2BZ5BYb1mKedpE0HlCinMNh1o%2Fpg%2FwVpZJvsc%2FG0uoPY6eE99nfsVMueh8wjEKnuP7novBnQh2FSA8JrkNtd8yb%2FgEN2v196EH4%2FLQ6NhN3Bg%2BuOwZeOZgZveEUuLKWmtG6bamkLGDMS%2FDcck5oidjUSiwiy10TKYkN%2FLndf0ptr3R1n%2BI50N6QAPhEbe9z07zCCc4%2BqxotM80A55tfYaBqV2KELkMXB0c%2BL9tH31PQ0X9ceN5bS6J8mZ%2BU5wS6Xov3ZdfACoc2vf%2BZZRL6wqiT7V2Iz8h608kGG5UCYoUzxMr8yQUTOaHfZ5ctYPRogiJ2JQLnNcu0imROC3v8RTuGCBKt%2FohONNgZXn5bfIlTiAWCHUOnx3RHPHG9YuS85jsHPMEuK3xaYjamXDIHo0xGWuuWXlf03nKB3RYXBXzT9pcRaPICBphaLwf34B9qUDtZiTIa4rhtpn9j9wjDsGdJzmknyUowGDYRHAoZega0IWNNPcqtafxmWq6LqTr7O1NeDdRlpbdvnC%2FXt2BqShsw%2FejEyQY6pgHChl%2FUhXGsUqm8TY%2BNxSlkrlAPbIcZFW%2Bwkieb6COZ9kHPWtA42z4w6oPguSCeru5llUtOEqvXoaRnJfElWNgpMRxlpSCGZaF96morWJnu9tby%2BdQo%2BzJr%2B6Z7hEbbOnw4F%2Fmr3ZSk3S5aHdq7fIj90dx05ZLkPqA%2BdA%2FvOGM%2FECr%2BTUgY8fU2te8W2iDAK1IxSttTJ8IRfZhlkp9KijF7fJGkEYdz&X-Amz-Signature=9304f9d0987751afaa22b11ed28d2ffc3bb085c6f1f476e45600b191d9f2e571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHTCBYJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDIIdlNrhSJD1AKzrLCZHJx1Dvs5t2NsYydaSZaPvffKAiAOdHh1kgL%2FUHitpWChTURzPCRNQgEOjddAcxPy64j8RCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMvYpjKv2rxIpalT14KtwD21GFEOPqSnBUfSSvTZKX6WXQGpospYa0qakTAdmdD2lg8FcDEVTkXykbjxRehatMJ71z474KKiUJX4YHR24Z4R3FkLAnDqcy10rFYf%2BZ5BYb1mKedpE0HlCinMNh1o%2Fpg%2FwVpZJvsc%2FG0uoPY6eE99nfsVMueh8wjEKnuP7novBnQh2FSA8JrkNtd8yb%2FgEN2v196EH4%2FLQ6NhN3Bg%2BuOwZeOZgZveEUuLKWmtG6bamkLGDMS%2FDcck5oidjUSiwiy10TKYkN%2FLndf0ptr3R1n%2BI50N6QAPhEbe9z07zCCc4%2BqxotM80A55tfYaBqV2KELkMXB0c%2BL9tH31PQ0X9ceN5bS6J8mZ%2BU5wS6Xov3ZdfACoc2vf%2BZZRL6wqiT7V2Iz8h608kGG5UCYoUzxMr8yQUTOaHfZ5ctYPRogiJ2JQLnNcu0imROC3v8RTuGCBKt%2FohONNgZXn5bfIlTiAWCHUOnx3RHPHG9YuS85jsHPMEuK3xaYjamXDIHo0xGWuuWXlf03nKB3RYXBXzT9pcRaPICBphaLwf34B9qUDtZiTIa4rhtpn9j9wjDsGdJzmknyUowGDYRHAoZega0IWNNPcqtafxmWq6LqTr7O1NeDdRlpbdvnC%2FXt2BqShsw%2FejEyQY6pgHChl%2FUhXGsUqm8TY%2BNxSlkrlAPbIcZFW%2Bwkieb6COZ9kHPWtA42z4w6oPguSCeru5llUtOEqvXoaRnJfElWNgpMRxlpSCGZaF96morWJnu9tby%2BdQo%2BzJr%2B6Z7hEbbOnw4F%2Fmr3ZSk3S5aHdq7fIj90dx05ZLkPqA%2BdA%2FvOGM%2FECr%2BTUgY8fU2te8W2iDAK1IxSttTJ8IRfZhlkp9KijF7fJGkEYdz&X-Amz-Signature=6f993b4438deccae70c6ab3de498cf2545cdd930fc841e225dfd7f0ae7f104f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

