angular.module('luck', [])
    .controller('luckCtrl', ['$scope', '$interval',
        function(scope, interval) {
            /* scope.range = 50;
            scope.number = 25;
            scope.pool = [];
            scope.luckdog = [];
            scope.inBottle = [];

            scope.hasInit = false;
            scope.roll = function() {
                scope.luckdog = [];
                if (scope.pool.length === 0) {
                    alert('The pool is empty now!');
                    scope.hasInit = false;
                } else {
                    for (var i = 0; i < scope.number; i++) {
                        // console.log('before shuffle',scope.pool);
                        shuffle(scope.pool);
                        // console.log('after shuffle',scope.pool);

                        scope.luckdog.push(scope.pool.pop());
                        // console.log('after pop',scope.pool);
                    }
                    console.log(scope.luckdog);
                }
                scope.inBottle = toBottle(scope.luckdog, 10);
            }

            scope.init = function() {
                scope.pool = [];
                scope.inBottle = [];
                scope.luckdog = [];
                for (var i = 0; i < scope.range; i++) {
                    scope.pool.push(i + 1);
                }
                scope.hasInit = true;
                console.log(scope.pool);
            }

            function toBottle(array, size) {
                var returnValue = [];
                var index = 0;
                while ((index + 1) * size < array.length) {
                    var tmp = [];
                    for (var i = 0; i < size; i++) {
                        tmp.push(array[size * index + i]);
                    }
                    returnValue.push(tmp);
                    index++;
                }
                var t = [];
                for(var i = index*size; i<array.length; i++){
                    t.push(array[i]);
                }
                returnValue.push(t);
                return returnValue;
            }

            function shuffle(o) { //v1.0
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };*/
            scope.number = null;
            scope.results = [];
            scope.but = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            scope.stop = true;
            var promise = null;
            scope.go = function() {
                if (scope.stop) {
                    scope.stop = false;
                    var length = scope.but.length;
                    if (length !== 1) {
                        var lastIndex = 0;
                        scope.but = shuffle(scope.but);
                        promise = interval(function() {
                            var tmp = Math.floor(Math.random() * length);
                            lastIndex = (tmp === lastIndex ? Math.floor(Math.random() * length) : tmp);
                            scope.number = scope.but[lastIndex];
                        }, 100);
                    } else {
                        alert('only '+ scope.but[0] + ' left');
                        scope.stop = true;
                    }
                } else {
                    scope.stop = true;
                    interval.cancel(promise);
                    scope.number = scope.but.pop();
                    scope.results.push(scope.number);
                }
            }
            scope.contain = function(o, n){
                var bool = false;
                for (var i = o.length - 1; i >= 0; i--) {
                    if(o[i] === n){
                        bool = true;
                        break;
                    }
                }
                return bool;
            }

            function shuffle(o) { //v1.0
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            }

            function animation(o) {

            }


        }
    ])
